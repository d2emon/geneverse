import random


class Location:
    def __init__(self, item, x, y, z, id=None):
        self.id = id or random.random()
        self.item = item
        self.x = x
        self.y = y
        self.z = z

    def as_dict(self):
        return {
            'x': self.x,
            'y': self.y,
            'z': self.z,
            'id': self.id,
        }


class Multiverse:
    names = [
        "multiverse", "lasagnaverse", "doughnutverse", "towelverse", "baconverse", "sharkverse", "nestedverse",
        "tastyverse", "upverse", "downverse", "layerverse", "clusterverse", "metaverse", "quantiverse", "paraverse",
        "epiverse", "alterverse", "hypoverse", "dimensioverse", "planiverse", "pluriverse", "polyverse", "maniverse",
        "stackoverse", "antiverse", "superverse", "upperverse", "maxiverse", "megaverse", "babyverse", "tinyverse",
        "retroverse", "ultraverse", "topoverse", "otherverse", "bubbleverse", "esreverse", "versiverse", "'verse",
        "cookieverse", "grandmaverse"
    ]

    def __init__(self, id=None, name=None, width=8, height=8, depth=8):
        self.id = id or random.randint(0, 1024)

        random.seed(self.id)
        self.name = name or random.choice(self.names).capitalize()
        self.width = width
        self.height = height
        self.depth = depth

        """
        self.universes = [Location(
            Universe,
            x=random.randint(self.width),
            y=random.randint(self.height),
            z=random.randint(self.depth),
        ) for i in random.randrange(10, 30)]
        """
        self.universes = [Location(
            Universe,
            x=random.randrange(self.width),
            y=random.randrange(self.height),
            z=random.randrange(self.depth),
        ) for i in range(10, random.randint(10, 30))]


    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'width': self.width,
            'height': self.height,
            'depth': self.depth,
            'universes': [universe.as_dict() for universe in self.universes],
        }


class Universe:
    def __init__(self, x=0, y=0, z=0):
        self.x = x
        self.y = y
        self.z = z

    def as_dict(self):
        return {
            'x': self.x,
            'y': self.y,
            'z': self.z,
        }


class Star:
    def __init__(self, width=4000, height=4000, depth=4000):
        self.x = random.randrange(-width/2, width/2)
        self.y = random.randrange(-height/2, height/2)
        self.z = random.randrange(-depth/2, depth/2)

    def as_dict(self):
        return {
            'x': self.x,
            'y': self.y,
            'z': self.z,
        }
