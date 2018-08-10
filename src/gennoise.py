import numpy
import math
from noise import snoise2


def point(x, y, freq, octaves):
    return (snoise2(x / freq, y / freq, octaves) + 1) / 2


def nofilter(x, y, value):
    return value


def white(x, y):
    # r = (math.cos(y * math.pi / 512) + 1) / 2
    # g = (math.cos((x + y) * math.pi / 512) + 1) / 2
    # b = (math.sin(x * math.pi / 512) + 1) / 2
    # return r, g, b
    return 255, 255, 255


def gennoise(w=256, h=256, freq=16.0, octaves=4, colorify=None, filter_noise=None, offsetx=0, offsety=0):
    if colorify is None:
        colorify = white

    if filter_noise is None:
        filter_noise = nofilter

    data = numpy.zeros((w, h, 3), dtype=numpy.uint8)
    for y in range(w):
        for x in range(h):
            gray = point(x + offsetx, y + offsety, freq, octaves)
            filtered = filter_noise(x, y, gray)
            data[x, y] = [filtered * c for c in colorify(x, y)]
    return data