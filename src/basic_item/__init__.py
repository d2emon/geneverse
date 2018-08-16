class Location:
    def __init__(self, x=0, y=0, z=0):
        self.x = x
        self.y = y
        self.z = z


class BasicItem:
    def __init__(self, size=1, **kwargs):
        self.location = Location(
            x=kwargs.get('x', 0),
            y=kwargs.get('y', 0),
            z=kwargs.get('z', 0),
        )
        self.size = size
