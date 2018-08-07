#!python3
from io import BytesIO
from PIL import Image


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
