import random

from flask import send_file

from app import app

from genimage import universe, save_image


class SpaceObject:
    def __init__(self, x, y, z=0, size=1):
        self.x = x
        self.y = y
        self.z = z
        self.size = size


class SuperVoid(SpaceObject):
    def __init__(self, x, y, z=0, size=255):
        super().__init__(x, y, z, size)

    def get_filter(self):
        def f(item):
            if (item.x - self.x) ** 2 > self.size ** 2:
                return True
            if (item.y - self.y) ** 2 > self.size ** 2:
                return True
            if (item.z - self.z) ** 2 > self.size ** 2:
                return True
            return False
        return f


class Star(SpaceObject):
    def __init__(self, x, y, z=0, size=1, brightness=255):
        super().__init__(x, y, z, size)
        self.brightness = brightness


def random_star(size, star_size):
    return Star(
        x=random.randrange(size),
        y=random.randrange(size),
        z=random.randrange(size),
        size=star_size,
        brightness=random.randrange(64, 255)
    )

@app.route('/space/img-<int:size>.png')
def get_space_img(size):
    star_max_size = 3
    stars_count = 4096
    void = SuperVoid(
        x=random.randrange(size),
        y=random.randrange(size),
        z=random.randrange(size),
        size=400
    )
    stars = [random_star(size, star_max_size) for _ in range(stars_count)]
    filtered = filter(void.get_filter(), stars)
    return send_file(save_image(universe(size, size, filtered)), mimetype='image/jpeg')
