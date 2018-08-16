import random
import math

from flask import send_file

from app import app

from genimage import universe, save_image


class SpaceObject:
    def __init__(self, x, y, z=0, size=1, width=None):
        self.x = x
        self.y = y
        self.z = z
        self.size = size
        self.width = width


class SuperVoid(SpaceObject):
    def __init__(self, x, y, z=0, size=255, width=None):
        super().__init__(x, y, z, size, width)

    def get_filter(self):
        def f(item):
            dx = self.x - item.x
            dy = self.y - item.y
            dz = self.z - item.z

            if (dx ** 2 + dy ** 2 + dz ** 2) > self.size ** 2:
                return True
            return False
        return f


class Star(SpaceObject):
    def __init__(self, x, y, z=0, size=1, brightness=255):
        super().__init__(x, y, z, size)
        self.brightness = brightness


class SuperCluster(SpaceObject):
    def __init__(self, x, y, z=0, size=1, brightness=255, width=None):
        super().__init__(x, y, z, size, width)
        self.brightness = brightness


class SpaceWall(SuperCluster):
    pass


def random_star(size, star_size):
    return Star(
        x=random.randrange(size),
        y=random.randrange(size),
        z=random.randrange(size),
        size=star_size,
        brightness=random.randrange(64, 255)
    )


@app.route('/space/img-<int:size>.png')
def get_space_img(size, scale=10):
    """
    Generate space image
    1000px = 10^27m
    1px = 10^24

    :param size:
    :return:
    """
    star_max_size = 2
    stars_count = int(((size / 8) ** 2))
    print(stars_count)

    clusters = {
        "Slone's Wall": SpaceWall(
            x=random.randrange(size),
            y=random.randrange(size),
            z=0,
            size=int(1.3 * scale),
        ),
        "Pisces-Ceti": SuperCluster(
            x=random.randrange(size),
            y=random.randrange(size),
            z=0,
            size=int(.946 * scale),
        ),
        "Virgo's Supercluster": SuperCluster(
            x=random.randrange(size),
            y=random.randrange(size),
            z=0,
            size=int(.189 * scale),
        ),
    }

    voids = {
        "Eridan's Void": SuperVoid(
            x=random.randrange(size),
            y=random.randrange(size),
            z=0,
            size=int(.9 * 100)
        ),
    }

    stars = [random_star(size, star_max_size) for _ in range(stars_count)] + list(clusters.values())
    return send_file(save_image(universe(size, size, stars, voids)), mimetype='image/jpeg')
