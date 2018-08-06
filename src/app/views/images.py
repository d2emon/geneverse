import math

from flask import send_file

from ..app import app

from genimage import image
from gennoise import gennoise


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


def empty_image_filter(w, h):
    def f(x, y, value):
        x0 = w / 2
        y0 = h / 2
        maxr = x0  # math.sqrt(x0 ** 2 + y ** 2)

        x = x - x0
        y = y - y0
        r = math.sqrt(x ** 2 + y ** 2)
        if r > maxr:
            return 0
        d = 1 - (r / maxr) ** 4
        value = value ** 4
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


@app.route('/img-<int:size>.png')
def get_img(size):
    freq = size / 4
    octaves = int(size / 64)
    if octaves < 1:
        octaves = 1
    data = gennoise(size, size, freq, octaves, filter_noise=image_filter(size, size), colorify=colorify(size))
    return send_file(image(data), mimetype='image/jpeg')


@app.route('/empty-img-<int:size>.png')
def get_empty_img(size):
    freq = size
    octaves = int(size / 128)
    if octaves < 1:
        octaves = 1
    # data = gennoise(size, size, freq, octaves, filter_noise=image_filter(size, size), colorify=colorify(size))
    data = gennoise(size, size, freq, octaves, filter_noise=empty_image_filter(size, size))
    return send_file(image(data), mimetype='image/jpeg')
