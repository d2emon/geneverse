import random


class Generated:
    names = ['UNNAMED']

    def __init__(self, item_id=None, name=None, description=""):
        self.id = item_id or random.randint(0, 1024)

        random.seed(self.id)
        self.name = name or random.choice(self.names).capitalize()
        self.description = description

    def as_dict(self):
        return {'name': self.name}


class Location:
    def __init__(self, x=None, y=None, z=None):
        self.x = x
        self.y = y
        self.z = z

    @property
    def location(self):
        return {
            'x': self.x,
            'y': self.y,
            'z': self.z,
        }
