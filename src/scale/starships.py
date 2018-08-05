from .scalable import Scalable


class Starship(Scalable):
    def __init__(self, name, size, universe="", scale=0):
        Scalable.__init__(self, name, size, scale)
        self.universe = universe


StarWars = [
    Starship("T-47 Snowspeeder", 4.5, "StarWars"),
    Starship("ETA-2 Actis", 5.47, "StarWars"),
    Starship("TIE Fighter", 6, "StarWars"),
    Starship("TIE Droid", 6.3, "StarWars"),
    Starship("Droid Starfighter", 6.96, "StarWars"),
    Starship("Storm IV Twin Pod cloud car", 7, "StarWars"),
    Starship("TIE Bomber", 7.8, "StarWars"),
    Starship("Jedi Starfighter", 8, "StarWars"),
    Starship("TIE Advanced (Vader's TIE)", 9.2, "StarWars"),
    Starship("TIE Defender", 9.2, "StarWars"),
    Starship("TIE Interceptor", 9.6, "StarWars"),
    Starship("A wing", 9.6, "StarWars"),
    Starship("Naboo N-1 Fighter", 11, "StarWars"),
    Starship("E wing", 11, "StarWars"),
    Starship("X wing", 12, "StarWars"),
    Starship("Y wing", 12.5, "StarWars"),
    Starship("ARC 170", 14.5, "StarWars"),
    Starship("B wing", 16, "StarWars"),
    Starship("LAAT", 17.4, "StarWars"),
    Starship("T-4a Lambda", 20, "StarWars"),
    Starship("Slave", 21.5, "StarWars"),
    Starship("Scimitar", 26.5, "StarWars"),
    Starship("Millenium Falcon", 34, "StarWars"),
    Starship("Naboo Royal Starship", 76, "StarWars"),
    Starship("Rebel Transport GR-75", 90, "StarWars"),
    Starship("Radiant VII", 115, "StarWars"),
    Starship("CR90 Corvette", 126, "StarWars"),
    Starship("C-9979 landing craft", 149, "StarWars"),
    Starship("EF-76 Nebulon-B", 300, "StarWars"),
    Starship("Core Ship", 696, "StarWars"),
    Starship("Acclamator", 752, "StarWars"),
    Starship("Destroyer Victory II", 900, "StarWars"),
    Starship("MC80 Star Cruiser", 1200, "StarWars"),
    Starship("Venator", 1155, "StarWars"),
    Starship("Destroyer Imperial I", 900, "StarWars"),
    Starship("Interdictor", 900, "StarWars"),
    Starship("Droid Control Ship", 3170, "StarWars"),
    Starship("Bellator", 7200, "StarWars"),
    Starship("Mediator", 8500, "StarWars"),
    Starship("Arc Hammer", 9500, "StarWars"),
    Starship("Sovereign", 15000, "StarWars"),
    Starship("Eclipse", 17500, "StarWars"),
    Starship("Executor", 19000, "StarWars"),
    Starship("Death Star", 160000, "StarWars"),
    Starship("Death Star 2", 9000000, "StarWars"),
]

StarTrack = [
    Starship("Enterprise NCC 1701", 289, "StarTrack"),
    Starship("Enterprise NCC 1701-D", 642, "StarTrack"),
    Starship("Romulan Star Empire", 1341, "StarTrack"),
    Starship("Borg Cube", 3000, "StarTrack"),
]

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
