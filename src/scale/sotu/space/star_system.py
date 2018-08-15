from scale.scalable import Scalable, Distance


class AstronomicUnit(Distance):
    default_scale = 12
    au = 0.149

    def __init__(self, name, size, scale=0):
        size *= AstronomicUnit.au
        scale += AstronomicUnit.default_scale
        Distance.__init__(self, name, size, scale)


class AUSized(Scalable):
    default_scale = 12
    au = 0.149

    def __init__(self, name, width, scale=0, length=None):
        scale += self.default_scale
        width *= self.au
        length = length and length * self.au
        Scalable.__init__(self, name, width=width, length=length, scale=scale)


class SystemSized:
    title = ""
    distance_scale = 6

    def __init__(self, name, width, scale=0, distance=None, length=None):
        self.name = self.title and "{} {}".format(self.title, name) or name
        self.size = AUSized(self.name, width=width, scale=scale, length=length)
        if distance is None:
            self.distance = None
        else:
            self.distance = AstronomicUnit("", distance, self.distance_scale)

    @property
    def width(self):
        return self.size.width

    @property
    def length(self):
        return self.size.length

    def __repr__(self):
        distance = self.distance and " -> {}".format(self.distance.width) or ''
        size = str(self.size.width)
        if self.size.length:
            size = "{} x {}".format(size, self.size.length)
        return "{} ({}{})".format(self.name, size, distance)


ITEMS = [
    SystemSized("Внутренний Край Облака Оорта", 50, scale=3),
    SystemSized("Внешний Край Облака Оорта", .2, scale=6),
]
