from scale.scalable import Scalable, Distance
from .galaxy import LightYears


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


class SunSized(Scalable):
    default_scale = 9
    sun = 0.696

    def __init__(self, name, width, scale=0, length=None):
        scale += self.default_scale
        width *= self.sun
        length = length and length * self.sun
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


class Star:
    title = ""
    distance_scale = 3

    def __init__(self, name, width, letter=None, constellation=None, scale=0, distance=None, length=None):
        self.name = self.title and "{} {}".format(self.title, name) or name
        self.letter = letter
        self.constellation = constellation
        self.size = SunSized(self.name, width=width, scale=scale, length=length)
        if distance is None:
            self.distance = None
        else:
            self.distance = LightYears("", distance, self.distance_scale)

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

        name = ""
        if self.name:
            name = " \"{}\"".format(self.name)
        if self.constellation:
            name = "{} {}{}".format(self.letter, self.constellation, name)
        return "{} ({}{})".format(name, size, distance)


ITEMS = [
    Star("Гакрукс", 113, "γ", "Южного Креста", distance=.088),
    Star("Денеб", 210, "α", "Лебедя", distance=1.64),

    Star("La Superba", 215, "Y", "Гончих Псов", distance=.71),
    Star(None, 370, "R", "Золотой Рыбы", distance=.204),
    Star("Пистолет", 306, distance=25),
    Star("Антарес", 400, "α", "Скорпиона", distance=0.6),
    Star(None, 390, "S", "Золотой Рыбы", distance=169),
    Star(None, 700, "V382", "Киля", distance=5.93),
    Star(None, 380, "V838", "Единорога", distance=20),

    Star("Бетельгейзе", 1200, "α", "Ориона", distance=0.724),
    Star("WOH G64", 2000, distance=163),
    Star(None, 1700, "VV", "Цефея A", distance=5),
    Star(None, 1450, "VY", "Большого Пса", distance=3.9),
    Star(None, 2850, "KY", "Лебедя", distance=5.153),
    Star(None, 1250, "V354", "Цефея", distance=9),
    Star("Гранатовая Звезда Гершеля", 1420, "μ", "Цефея", distance=9),

    SystemSized("Пояс Койпера", 55),
    SystemSized("Внутренний Край Облака Оорта", 50, scale=3),
    SystemSized("Внешний Край Облака Оорта", .2, scale=6),

    Distance("от Земли до Солнца", 0.15, 12),
    Distance("от Юпитера до Солнца", 0.78, 12),
    Distance("от Нептуна до Солнца", 4.5, 12),
    Distance("от Плутона до Солнца", 5.9, 12),
    Distance("от Вояджера 1 до Земли", 17, 12),
    Distance("Световой День", 26, 12),
]