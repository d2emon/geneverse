import random

from PIL import ImageDraw

from genimage import transparent_image


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
        dist = 1 - cluster.z / universe.width
        r1 = cluster.size * dist
        r2 = r1
        if cluster.width is not None:
            r2 = cluster.width * dist
        ellipse = (cluster.x, cluster.y, cluster.x + r1, cluster.y + r2)
        color = (cluster.brightness, cluster.brightness, cluster.brightness)
        draw.ellipse(ellipse, fill=color)
    return img
