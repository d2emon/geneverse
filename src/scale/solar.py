from .scalable import Scalable


class Asteroid(Scalable):
    def __init__(self, name, size, scale=6):
        Scalable.__init__(self, name, size, scale)


ANIMALS = [
    Asteroid("Tunguska event meteor", .1, 3),
    Asteroid("Gaspra", 34, 3),
    Asteroid("Psyche", .264),
    Asteroid("Pallas", .522),
    Asteroid("Ceres", .975),
    Asteroid("Haumea", 1.400),
    Asteroid("Make Make", 1.420),
    Asteroid("Eris", 2.326),
    Asteroid("Pluto", 2.374),
    Asteroid("Charon", 1.212),
    Asteroid("Mercury", 4.879),
    Asteroid("Mars", 6.799),
    Asteroid("Phobos", 22, 3),
    Asteroid("Deimos", 12, 3),
    Asteroid("Venus", 12.104),
    Asteroid("Moon", 3.474),
    Asteroid("Earth", 12.742),
    Asteroid("Neptune", 49.244),
    Asteroid("Triton", 2.706),
    Asteroid("Proteus", .420),
    Asteroid("Uranus", 50.724),
    Asteroid("Titania", 1.576),
    Asteroid("Oberon", 1.522),
    Asteroid("Umbriel", 1.168),
    Asteroid("Ariel", 1.156),
    Asteroid("Miranda", .470),
    Asteroid("Saturn", 116.474),
    Asteroid("Titan", 5.151),
    Asteroid("Rhea", 1.525),
    Asteroid("Iapetus", 1.468),
    Asteroid("Dione", 1.122),
    Asteroid("Enceladus", .502),
    Asteroid("Mimas", .396),
    Asteroid("Jupiter", 139.822),
    Asteroid("Ganimede", 5.262),
    Asteroid("Callisto", 4.821),
    Asteroid("Io", 3.643),
    Asteroid("Europa", 3.122),
    Asteroid("Sun", 1.391, 9),
]
