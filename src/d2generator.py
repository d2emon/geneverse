import random


class Generated:
    names = ['UNNAMED']

    def __init__(self, id, name=None):
        self.id = id or random.randint(0, 1024)

        random.seed(self.id)
        self.name = name or random.choice(self.names).capitalize()

    def as_dict(self):
        return {'name': self.name}


class Location:
    def __init__(self, item, x, y, z, id=None):
        self.id = id or random.randrange(1024)
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
