from .scalable import Scalable
from .starships import STARSHIPS
from .worlds import WORLDS
from .structures import SKYSCRAPERS
from .military import MILITARY

ITEMS = STARSHIPS\
    + WORLDS\
    + SKYSCRAPERS\
    + MILITARY\
    + [
        Scalable("Планковская длина", 1.6, -35),
        Scalable("Обозреваемая вселенная", 8.8, 26),

        Scalable("Церера", .95, 6),
        Scalable("Луна", 3.5, 6),
        Scalable("Меркурий", 5, 6),
        Scalable("Венера", 12, 6),
        Scalable("Земля", 13, 6),
        Scalable("Марс", 7, 6),
        Scalable("Юпитер", 140, 6),
        Scalable("Сатурн", 123, 6),
        Scalable("Уран", 51, 6),
        Scalable("Нептун", 50, 6),
        Scalable("Плутон", 2.4, 6),
        Scalable("Кеплер 22b", 30, 6),
        Scalable("Проксима Центавра", 200, 6),
        Scalable("Сириус A", 2.5, 9),
        Scalable("Вега", 3.8, 9),
        Scalable("Арктур", 36, 9),
        Scalable("Ригель", 97, 9),
        Scalable("Бетельгейзе", 1.3, 12),
        Scalable("VY Малых Псов", 2, 12),
        Scalable("UY Щита", 2.5, 12),
        Scalable("Сверхмассивнаяя черная дыра NGC 1277", 60, 12),
        Scalable("TON 618", 400, 12),
        Scalable("Туманность Кошачий Глаз", 250, 15),
        Scalable("Туманность Улитка", 30, 18),
        Scalable("Туманность Ориона", 240, 18),
        Scalable("Омега Центавра", 1.5, 21),
        Scalable("Малое Магелланово Облако", 70, 21),
        Scalable("Млечный Путь", 1, 24),
        Scalable("IC 1101", 60, 24),
        Scalable("Войд Волопаса", 2.5, 27),
        Scalable("Вселенная", 1.5, 30),

        Scalable("Ганимед", 5.5, 6),
        Scalable("Кеплер 10c", 31, 6),
        Scalable("Поллукс", 2.8, 9),
        Scalable("Альдебаран", 64, 9),
        Scalable("Антарес", 1.25, 12),

        Scalable("Ланиакея", 5, 27),

        Scalable("Солнце", 1.4, 9),
    ]
