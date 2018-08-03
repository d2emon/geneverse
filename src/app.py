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


def image_filter(x, y, value):
    x0 = 256
    y0 = 256
    maxr = 256

    x = x - x0
    y = y - y0
    r = math.sqrt(x ** 2 + y ** 2)
    if r > maxr:
        return 0
    d = 1 - (r / maxr)
    return value * d


@app.route('/')
def index():
    return "Hello, World!"


@app.route('/img<id>.png')
def get_img(id):
    data = gennoise(512, 512, 64.0, 4, filter_noise=image_filter)
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
