import random


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
