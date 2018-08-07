from .scalable import Scalable

from .sotu import SOTU
from .starships import STARSHIPS
from .worlds import WORLDS
from .structures import SKYSCRAPERS

ITEMS = SOTU\
        + STARSHIPS\
        + WORLDS\
        + SKYSCRAPERS\
        + [
    Scalable("Обозреваемая вселенная", 8.8, 26),

    Scalable("Кеплер 22b", 30, 6),
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

    Scalable("Ланиакея", 5, 27),

]
