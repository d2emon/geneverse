import random

from PIL import ImageDraw

from basic_item import BasicItem
from genimage import transparent_image


class SpaceItem(BasicItem):
    def __init__(self, x, y, z=0, size=1, width=None):
        super().__init__(x=x, y=y, z=z, size=size)
        self.width = width

    def bounds(self, dist):
        height = self.size * dist
        width = height
        if self.width is not None:
            width = self.width * dist
        return self.left, self.top, self.left + width, self.top + height


class GlowingSpaceItem(SpaceItem):
    def __init__(self, x, y, z=0, size=1, width=None, brightness=255):
        super().__init__(x, y, z, size, width)
        self.brightness = brightness

    @property
    def color(self):
        return self.brightness, self.brightness, self.brightness


class SuperVoid(SpaceItem):
    def get_filter(self):
        def f(item):
            return self.location.distance_to(item.location) > self.size
        return f


class Star(GlowingSpaceItem):
    pass


class SuperCluster(GlowingSpaceItem):
    @classmethod
    def generate(cls, width=1024, height=1024, depth=1024, star_size=1):
        return cls(
            x=random.randrange(width),
            y=random.randrange(height),
            z=random.randrange(depth),
            size=random.randrange(star_size),
            brightness=random.randrange(64, 255)
        )


class SpaceWall(SuperCluster):
    pass


class Universe:
    cluster_size = 3

    def __init__(self, width=512, height=512, depth=512, clusters_count=None):
        self.width = width
        self.height = height
        self.depth = depth

        self.clusters = []
        self.voids = []

        if clusters_count is None:
            density = 16 ** 2
            clusters_count = int((width * height * 1) / density)

        for _ in range(clusters_count):
            self.add_cluster()

    def add_cluster(self, x=None, y=None, z=0, size=None):
        self.clusters.append(SuperCluster(
            x=x or random.randrange(self.width),
            y=y or random.randrange(self.height),
            z=z or random.randrange(self.depth),
            size=size or random.randrange(1, self.cluster_size),
            brightness=random.randrange(64, 255)
        ))

    def add_void(self, x=None, y=None, z=0, size=10):
        self.voids.append(SuperVoid(
            x=x or random.randrange(self.width),
            y=y or random.randrange(self.height),
            z=z or random.randrange(self.depth),
            size=size,
        ))


def draw_universe(universe):
    img = transparent_image(universe.width, universe.height)
    draw = ImageDraw.Draw(img)

    clusters = universe.clusters
    for void in universe.voids:
        clusters = filter(void.get_filter(), clusters)

    for cluster in clusters:
        dist = 1 - cluster.location.z / universe.depth
        draw.ellipse(cluster.bounds(dist), fill=cluster.color)
    return img
