from .scalable import Scalable


class Starship(Scalable):
    def __init__(self, name, size, universe="", scale=0):
        Scalable.__init__(self, name, size, scale)
        self.universe = universe


STARSHIPS = [
    Starship("TIE Fighter", 6, "StarWars"),
    Starship("Star Fury", 10, "Babylon5"),
    Starship("X wing", 12, "StarWars"),
    Starship("UNSC Pelican", 30, "Halo"),
    Starship("Millenium Falcon", 34, "StarWars"),
    Starship("Endurance", 65, "Interstellar"),
    Starship("ISS", 73, "NASA"),
    Starship("Discovery One", 140, "2001 Space Odyssey"),
    Starship("SSV Normandy SR-1", 155, "Mass Effect"),
    Starship("Enterprise NCC 1701", 289, "StarTrack"),
    Starship("Whitestar", 476, "Babylon5"),
    Starship("UNSC Frigate", 490, "Halo"),
    Starship("Enterprise NCC 1701-D", 642, "StarTrack"),
    Starship("Destroyer", 900, "StarWars"),
    Starship("Romulan Star Empire", 1341, "StarTrack"),
    Starship("Galactica", 1445, "Battlestar Galactica"),
    Starship("Covenant Battlecruiser", 1782, "Halo"),
    Starship("Collector Cruiser", 1890, "Mass Effect"),
    Starship("Destiny Ascension", 1900, "Mass Effect"),
    Starship("Reaper", 2000, "Mass Effect"),
    Starship("Droid Control Ship", 3170, "StarWars"),
    Starship("V Mothership", 3200, "V"),
    Starship("Apaphis", 3325, "StarGate"),
    Starship("Hel", 4266, "EVE Online"),
    Starship("Dictator", 5100, "Warhammer 40000"),
    Starship("Covenant Assault Carrier", 5346, "Halo"),
    Starship("Anubis", 5500, "StarGate"),
    Starship("UNSC Infinity", 5600, "Halo"),
    Starship("Borg Cube", 3000, "StarTrack"),
    Starship("Lexx", 10000, "Lexx"),
    Starship("Eternal Crusader", 10000, "Warhammer 40000"),
    Starship("Collector Base", 11800, "Mass Effect"),
    Starship("Avatar", 13774, "EVE Online"),
    Starship("Erebus", 14764, "EVE Online"),
    Starship("Mass Relay", 15000, "Mass Effect"),
    Starship("Ranarok", 18127, "EVE Online"),
    Starship("Executer", 19000, "StarWars"),
    Starship("City Destroyer Invasion Mothership", 24000, "Independence Day"),
    Starship("Citadel", 44700, "Mass Effect"),
    Starship("TET", 100000, "Oblivion"),
    Starship("Death Star", 160000, "StarWars"),
    Starship("High Charity", 464000, "Halo"),
    Starship("Death Star 2", 9000000, "StarWars"),
    Starship("Halo", 10000000, "Halo"),
    Starship("The Ark", 127530000, "Halo"),
]