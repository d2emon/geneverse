import random
import math


class Location:
    def __init__(self, x=0, y=0, z=0):
        self.x = x
        self.y = y
        self.z = z

    def distance_to(self, location2):
        dx = self.x - location2.x
        dy = self.y - location2.y
        dz = self.z - location2.z
        return math.sqrt(dx ** 2 + dy ** 2 + dz ** 2)


class BasicItem:
    def __init__(self, size=1, **kwargs):
        self.location = Location(
            x=kwargs.get('x', 0),
            y=kwargs.get('y', 0),
            z=kwargs.get('z', 0),
        )
        self.size = size

    @property
    def left(self):
        return self.location.x

    @property
    def top(self):
        return self.location.y

    @classmethod
    def generate(cls, width=512, height=512, depth=512):
        return cls(
            x=random.randrange(width),
            y=random.randrange(height),
            z=random.randrange(depth),
        )
