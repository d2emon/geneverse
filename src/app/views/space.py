import random

from flask import send_file

from app import app

from genimage import universe, save_image


class Star:
    def __init__(self, x, y, z=0, size=1, brightness=255):
        self.x = x
        self.y = y
        self.z = z
        self.size = size
        self.brightness = brightness


@app.route('/space/img-<int:size>.png')
def get_space_img(size):
    star_max_size = 3
    stars_count = 2048
    stars = [Star(
        x=random.randrange(size),
        y=random.randrange(size),
        z=random.randrange(size),
        size=star_max_size,
        brightness=random.randrange(64, 255)
    ) for i in range(stars_count)]
    return send_file(save_image(universe(size, size, stars)), mimetype='image/jpeg')
