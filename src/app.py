#!python3
import math

from flask import Flask, request, jsonify, make_response, url_for, send_file
from flask_cors import CORS

from data import generate_thing, list_generators, thing_meta
from stars import Star
from genimage import image
from gennoise import gennoise


app = Flask(__name__)
CORS(app)

def make_public_generator(gen):
    res = gen
    res['uri'] = url_for('get_generated', gen=res['name'].replace(' ', '_'), _external=True)
    return res


def make_public_item(item):
    res = item
    for child in res.get("children", dict()):
        child['uri'] = url_for('get_generated', gen=child['generator'].replace(' ', '_'), _external=True)
    return res


def image_filter(w, h):
    def f(x, y, value):
        x0 = w / 2
        y0 = h / 2
        maxr = x0

        x = x - x0
        y = y - y0
        r = math.sqrt(x ** 2 + y ** 2)
        if r > maxr:
            return 0
        d = 1 - (r / maxr)
        return value * d
    return f


def colorify(size):
    color_noise = gennoise(size + 128, size + 128, 128.0)
    def f(x, y):
        # r = (color_noise[x, y][0] + color_noise[x + 128, y][0]) / 2
        # g = red_noise[x, y][0] * blue_noise[x, y][0] * white_noise[x, y][0]
        # b = (color_noise[x, y][0] + color_noise[x, y + 128][0]) / 2
        # g = (r + b) / 2
        r = 128 + color_noise[x + 128, y][0] / 2
        g = 64 + color_noise[x, y + 128][0] / 4
        b = 128 + color_noise[x + 128, y + 128][0] / 2
        return r, g, b
    return f


@app.route('/')
def index():
    return "Hello, World!"


@app.route('/img-<int:size>.png')
def get_img(size):
    freq = size / 4
    octaves = int(size / 64)
    if octaves < 1:
        octaves = 1
    data = gennoise(size, size, freq, octaves, filter_noise=image_filter(size, size), colorify=colorify(size))
    return send_file(image(data), mimetype='image/jpeg')


@app.route('/api/v1.0/list', methods=['GET'])
def get_generators():
    return jsonify({
        'generators': [make_public_generator(g) for g in list_generators()],
    })


@app.route('/api/v1.0/generate/<gen>', methods=['GET'])
def get_generated(gen):
    gen = gen.replace('_', ' ')
    return jsonify({
        'generator': gen,
        'result': make_public_item(generate_thing(gen)),
    })


@app.route('/api/v1.0/stars', methods=['GET'])
def get_stars():
    count = int(request.args.get('count', 200))
    return jsonify({
        'stars': [Star().as_dict() for i in range(count)],
    })

@app.route('/api/v1.0/meta/<gen>', methods=['GET'])
def get_meta(gen):
    gen = gen.replace('_', ' ')
    return jsonify({
        'generator': gen,
        'meta': thing_meta(gen),
    })


@app.errorhandler(404)
def not_found(error):
    print(error)
    return make_response(jsonify({'error': 'Not found'}), 404)


if __name__ == '__main__':
    app.run(debug=True)
