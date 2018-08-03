#!python3
from io import BytesIO
from PIL import Image


def image(data):
    img = Image.fromarray(data, 'RGB')
    io = BytesIO()
    img.save(io, 'PNG', quality=70)
    io.seek(0)
    return io
