#!python3
import random

from io import BytesIO
from PIL import Image, ImageDraw


def image(data):
    img = Image.fromarray(data, 'RGB')
    """
    img = img.convert("RGBA")
    data = img.getdata()

    newData = []
    for item in data:
        r, g, b, a = item
        a = int((r + g + b) / 3)
        if a > 0:
            a = 256
        newData.append((r, g, b, a))
    img.putdata(newData)
    """

    io = BytesIO()
    img.save(io, 'PNG', quality=70)
    io.seek(0)
    return io


def transparent_image(width, height):
    img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    return img


def save_image(img):
    io = BytesIO()
    img.save(io, 'PNG', quality=70)
    io.seek(0)
    return io


def draw_image(width, height, item):
    img = transparent_image(width, height)
    draw = ImageDraw.Draw(img)

    item.draw(draw)
    return save_image(img)
