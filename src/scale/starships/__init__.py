from .starship import Starship

from .starwars import StarWars
from .startrack import StarTrack


Babylon5 = [
    Starship("Star Fury", 10, "Babylon5"),
    Starship("Whitestar", 476, "Babylon5"),
]

Halo = [
    Starship("UNSC Pelican", 30, "Halo"),
    Starship("UNSC Frigate", 490, "Halo"),
    Starship("Covenant Battlecruiser", 1782, "Halo"),
    Starship("Covenant Assault Carrier", 5346, "Halo"),
    Starship("UNSC Infinity", 5600, "Halo"),
    Starship("High Charity", 464000, "Halo"),
    Starship("Halo", 10000000, "Halo"),
    Starship("The Ark", 127530000, "Halo"),
]

Interstellar = [
    Starship("Endurance", 65, "Interstellar"),
]

NASA = [
    Starship("ISS", 73, "NASA"),
]

SpaceOdyssey = [
    Starship("Discovery One", 140, "2001 Space Odyssey"),
]

MassEffect = [
    Starship("SSV Normandy SR-1", 155, "Mass Effect"),
    Starship("Collector Cruiser", 1890, "Mass Effect"),
    Starship("Destiny Ascension", 1900, "Mass Effect"),
    Starship("Reaper", 2000, "Mass Effect"),
    Starship("Collector Base", 11800, "Mass Effect"),
    Starship("Mass Relay", 15000, "Mass Effect"),
    Starship("Citadel", 44700, "Mass Effect"),
]

BattlestarGalactica = [
    Starship("Galactica", 1445, "Battlestar Galactica"),
]

V = [
    Starship("V Mothership", 3200, "V"),
]

StarGate = [
    Starship("Apaphis", 3325, "StarGate"),
    Starship("Anubis", 5500, "StarGate"),
]

EveOnline = [
    Starship("Hel", 4266, "EVE Online"),
    Starship("Avatar", 13774, "EVE Online"),
    Starship("Erebus", 14764, "EVE Online"),
    Starship("Ranarok", 18127, "EVE Online"),
]

Wh40k = [
    Starship("Dictator", 5100, "Warhammer 40000"),
    Starship("Eternal Crusader", 10000, "Warhammer 40000"),
]

Lexx = [
    Starship("Lexx", 10000, "Lexx"),
]

IndependenceDay =[
    Starship("City Destroyer Invasion Mothership", 24000, "Independence Day"),
]

Oblivion = [
    Starship("TET", 100000, "Oblivion"),
]

STARSHIPS = StarWars\
            + StarTrack\
            + Babylon5\
            + Halo\
            + Interstellar\
            + NASA\
            + SpaceOdyssey\
            + MassEffect\
            + BattlestarGalactica\
            + V\
            + StarGate\
            + EveOnline\
            + Wh40k\
            + Lexx\
            + IndependenceDay\
            + Oblivion
