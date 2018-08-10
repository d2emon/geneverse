from scale.scalable import Scalable, Distance


parsec = 3.26


class LightYears(Distance):
    default_scale = 15
    light_year = 9.46

    def __init__(self, name, size, scale=0):
        size *= LightYears.light_year
        scale += LightYears.default_scale
        Distance.__init__(self, name, size, scale)


class LightYearsSized(Scalable):
    default_scale = 15
    light_year = 9.46

    def __init__(self, name, width, scale=0, length=None):
        scale += LightYearsSized.default_scale
        width *= self.light_year
        length = length and length * self.light_year
        Scalable.__init__(self, name, width=width, length=length, scale=scale)


class Cluster(LightYearsSized):
    pass


class Galaxy:
    MIN_SIZE = (16, 3)
    MAX_SIZE = (800, 3)

    def __init__(self, name, size, scale=3, stars_scale=15, distance=None):
        self.name = name
        self.size = LightYearsSized(self.name, width=size, scale=scale)
        self.distance = distance

    def __repr__(self):
        return "{} ({}){}".format(self.name, self.size, self.distance)


GALAXIES = [
    Scalable("Sagittarius Dwarf Galaxy", 0.1, 21),
    Scalable("Canis Venatici Dwarf Galaxy I", 65, 18),

    Scalable("Большое Магелланово Облако", 0.14, 21),

    Scalable("NGC 3310", 0.22, 21),
    Scalable("NGC 7714", 0.35, 21),
    Scalable("Sombrero Galaxy", 0.5, 21),
    Scalable("Triangulum Galaxy", 0.5, 21),

    Scalable("Млечный Путь", 1.2, 21),

    Scalable("Black Eye Galaxy", 0.85, 21),
    Scalable("Andromeda Galaxy", 1.5, 21),
    Scalable("Pinwheel Galaxy", 1.7, 21),
    Scalable("Cartwheel Galaxy", 1.5, 21),
    Scalable("Whirlpool Galaxy", 1.8, 21),
    Scalable("NGC 1232", 2.2, 21),
    Scalable("Tadpole Galaxy", 3, 21),
    Scalable("Virgo A", 2.5, 21),
    Galaxy("M 87 (Virgo A)", 2.5, 21, distance=LightYears("до M 87", 53.5, 6)),

    Distance("которое прошла Земля относительно Солнца", 4.5, 21),

    Galaxy("NGC 4889", 239),

    LightYears("до Галактики Андромеды", 2.537, 6),
    LightYears("до Abell 2029", 1.027, 9),
    Cluster("Abell 2029", 8, 6),  # 50 galaxies

    Galaxy("IC 1101", 6000, stars_scale=15),

    Cluster("Местная группа галактик", 10, 6),  # 50 galaxies
    LightYears("до Скопления Печи", 62, 6),
    Cluster("Скопление Печи", 10, 6),  # 58 galaxies
    LightYears("до Скопления Девы", 59, 6),
    Cluster("Скопление Девы", 2.2 * parsec, 6),  # 2000 galaxies
    LightYearsSized("Сверхскопление Девы", 200, 6),  # 100 clusters + 30 galaxies
    LightYearsSized("Сверхпустота Эридана", width=1, length=10, scale=9),
    LightYears("до Великого Аттрактора", 250, 6),
    LightYearsSized("Комплекс сверхскоплений Рыб-Кита", width=1, length=0.150, scale=9),
    LightYears("до Сверхскопления Шепли", 650, 6),
    LightYears("до Великой стены Слоуна", 1.2, 9),
    LightYearsSized("Великая стена Слоуна", 1.37, 9),
    LightYearsSized("Гигапарсек", parsec, 9),

    Distance("HDF", 0.127, 27),  # ?

    LightYearsSized("Обозреваемая вселенная", 28 * parsec, 9),
    Scalable("Вселенная", 1.6, 27),
]
