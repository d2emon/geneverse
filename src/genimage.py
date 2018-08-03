#!python3
import numpy
import math
import random
from noise import snoise2
from PIL import Image


def grey(x, y, freq, octaves):
    return snoise2(x / freq, y / freq, octaves) * 128 + 128


def color(x, y):
    return [1] * 3
    # r = (math.cos(y * math.pi / 512) + 1) / 2
    # g = (math.cos((x + y) * math.pi / 512) + 1) / 2
    # b = (math.sin(x * math.pi / 512) + 1) / 2
    # return r, g, b


def filterNoise(x, y, value):
    x0 = x - 256
    y0 = y - 256
    r = math.sqrt(x0 ** 2 + y0 ** 2)
    maxr = 256 # * 0.75
    if r > maxr:
        return 0
    if r < 64:
        return value
    # d = 1 - math.sqrt(r / maxr)
    d = 1 - (r / maxr) ** 4
    return value * d


def point(x, y, freq, octaves):
    value = grey(x, y, freq, octaves)
    value = filterNoise(x, y, value)
    return [value * c for c in color(x, y)]


def gennoise(w, h, freq, octaves):
    data = numpy.zeros((w, h, 3), dtype=numpy.uint8)
    for y in range(w):
        for x in range(h):
            data[x, y] = point(x, y, freq, octaves)
    return data


def genimage(w, h, freq=16.0, octaves=4):
    data = gennoise(w, h, freq, octaves)
    return Image.fromarray(data, 'RGB')


def main():
    w = 512
    h = 512
    # octaves = 4
    # freq = 16.0 + octaves
    octaves = 4
    freq = 64.0

    print("MAIN", octaves, freq)
    img = genimage(w, h, freq, octaves)
    filename = "gen-{}.png".format(octaves, )
    img.save(filename)
    img.show()


if __name__ == "__main__":
    main()