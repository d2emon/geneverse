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


def universe(width=512, height=512, clusters=(), voids=()):
    img = transparent_image(width, height)
    draw = ImageDraw.Draw(img)

    for void in voids.values():
        clusters = filter(void.get_filter(), clusters)

    for cluster in clusters:
        dist = 1 - cluster.z / width
        r1 = cluster.size * dist
        r2 = r1
        if cluster.width is not None:
            r2 = cluster.width * dist
        ellipse = (cluster.x, cluster.y, cluster.x + r1, cluster.y + r2)
        color = (cluster.brightness, cluster.brightness, cluster.brightness)
        draw.ellipse(ellipse, fill=color)
    return img


def save_image(img):
    io = BytesIO()
    img.save(io, 'PNG', quality=70)
    io.seek(0)
    return io
