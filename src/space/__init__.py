import random
from d2generator import Generated, Location


class Multiverse(Generated):
    names = [
        "multiverse", "lasagnaverse", "doughnutverse", "towelverse", "baconverse", "sharkverse", "nestedverse",
        "tastyverse", "upverse", "downverse", "layerverse", "clusterverse", "metaverse", "quantiverse", "paraverse",
        "epiverse", "alterverse", "hypoverse", "dimensioverse", "planiverse", "pluriverse", "polyverse", "maniverse",
        "stackoverse", "antiverse", "superverse", "upperverse", "maxiverse", "megaverse", "babyverse", "tinyverse",
        "retroverse", "ultraverse", "topoverse", "otherverse", "bubbleverse", "esreverse", "versiverse", "'verse",
        "cookieverse", "grandmaverse"
    ]

    def __init__(self, id=None, name=None, description=""):
        super().__init__(id, name, description)

        """
        self.universes = [Location(
            Universe,
            x=random.randrange(self.width),
            y=random.randrange(self.height),
            z=random.randrange(self.depth),
            id=random.randrange(1024),
        ) for _ in range(random.randint(10, 30))]
        """
        self.universes = [Universe() for _ in range(random.randint(10, 30))]

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'universes': [universe.as_dict() for universe in self.universes],
        }


class Universe(Generated):
    names = ['Universe']

    def __init__(self, id=None, name=None, width=512, height=512, depth=512, description=""):
        super().__init__(id, name, description)
        self.width = width
        self.height = height
        self.depth = depth

        self.cluster_ids = [random.randrange(1024) for _ in range(random.randint(10, 30))]
        self.__clusters = None

    @property
    def clusters(self):
        if not self.__clusters:
            self.__clusters = [Supercluster(
                item_id=cluster_id,
                x=random.randrange(self.width),
                y=random.randrange(self.height),
                z=random.randrange(self.depth),
            ) for cluster_id in self.cluster_ids]
        return self.__clusters

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'width': self.width,
            'height': self.height,
            'depth': self.depth,
        }


class Supercluster(Generated, Location):
    names = ['Galactic Supercluster']

    def __init__(self, item_id=None, name=None, x=None, y=None, z=None, width=None, height=None, depth=None):
        super().__init__(
            item_id=item_id,
            name=name,
        )

        self.width = width or 16
        self.height = height or 16
        self.depth = depth or 16

        self.x = x or random.randrange(self.width)
        self.y = y or random.randrange(self.height)
        self.z = z or random.randrange(self.depth)

        self.galaxy_ids = [random.randrange(1024) for _ in range(random.randint(10, 30))]
        self.__galaxies = None

    @property
    def galaxies(self):
        if not self.__galaxies:
            self.__galaxies = [Galaxy(
                item_id=galaxy_id,
                x=random.randrange(self.width),
                y=random.randrange(self.height),
                z=random.randrange(self.depth),
            ) for galaxy_id in self.galaxy_ids]
        return self.__galaxies

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'size': format(self.width / 10),
            'depth': self.depth,
            'location': self.location,
            # 'galaxies': [galaxy.as_dict() for galaxy in self.galaxies],
        }


class GalaxyCenter(Generated):
    names = ['Galactic Center']
    """
    "black hole",
    "galactic life,10%",
    "dyson sphere,4%",
    "dyson sphere,2%",
    "star system,20-50",
    "nebula,0-12"
    """


class GalaxyArm(Generated):
    names = ['Arm']
    """
    "galactic life,5%",
    "dyson sphere,4%",
    "dyson sphere,2%",
    "star system,20-50",
    "nebula,0-12",
    "black hole,20%",
    "black hole,20%"
    """


class Galaxy(Generated, Location):
    names = ['Galaxy']

    def __init__(self, item_id=None, name=None, x=None, y=None, z=None, radius=8):
        super().__init__(
            item_id=item_id,
            name=name,
        )

        self.radius = radius

        self.x = x or random.randrange(self.radius)
        self.y = y or random.randrange(self.radius)
        self.z = z or random.randrange(self.radius)

        self.galaxy_ids = [random.randrange(1024) for _ in range(random.randint(10, 30))]
        self.__galaxies = None

        self.center = GalaxyCenter(random.randrange(1024))
        self.arms = [GalaxyArm(random.randrange(1024)) for i in range(random.randint(2, 6))]

    def as_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'radius': self.radius,
            'location': self.location,
            'center': self.center.as_dict(),
            'arms': [arm.as_dict() for arm in self.arms],
        }


class Nebula(Generated):
    names = ["Nebula"]
    """
    [
    "galactic life,15%",
    "star,2%",
    "star,2%",
    "star,2%",
    "interstellar cloud,1-6"
    ]
    """


class InterstellarCloud(Generated):
    """
    [
    "helium",
    "hydrogen",
    "carbon,80%",
    "water,5%",
    "ammonia,5%",
    "nitrogen,5%",
    "iron,5%",
    "sulfur,5%",
    "oxygen,15%"
    ],

    [
        "a bright pink",
        "a faint",
        "a fading",
        "a pale",
        "a fluo",
        "a glowing",
        "a green",
        "a bright green",
        "a dark brown",
        "a brooding",
        "a magenta",
        "a bright red",
        "a dark red",
        "a blueish",
        "a deep blue",
        "a turquoise",
        "a teal",
        "a golden",
        "a multicolored",
        "a silver",
        "a dramatic",
        "a luminous",
        "a colossal",
        "a purple",
        "a gold-trimmed",
        "an opaline",
        "a silvery",
        "a shimmering"
    ],
    " "
    "interstellar cloud"
    """


class Star:
    """
    "star system",
    [
    "star",
    "star,3%",
    "visitor planet,5%",
    "future planet,10%",
    "future planet,10%",
    "terraformed planet,50%",
    "terraformed planet,20%",
    "terraformed planet,10%",
    "medieval planet,30%",
    "medieval planet,20%",
    "ancient planet,50%",
    "ancient planet,30%",
    "ancient planet,10%",
    "barren planet,60%",
    "barren planet,40%",
    "barren planet,20%",
    "gas giant,60%",
    "gas giant,40%",
    "gas giant,20%",
    "gas giant,10%",
    "asteroid belt,0-2"
    ]
    """
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
