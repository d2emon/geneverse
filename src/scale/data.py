from .scalable import Scalable

from .sotu import SOTU
from .starships import STARSHIPS
from .worlds import WORLDS
from .structures import SKYSCRAPERS
from .structures import STRUCTURES
from .military import MILITARY

ITEMS = SOTU\
    + STARSHIPS\
    + WORLDS\
    + SKYSCRAPERS\
    + STRUCTURES\
    + MILITARY\
    + [
        Scalable("Кеплер 22b", 30, 6),
        Scalable("UY Щита", 2.5, 12),
        Scalable("Сверхмассивнаяя черная дыра NGC 1277", 60, 12),
        Scalable("TON 618", 400, 12),

        Scalable("IC 1101", 60, 24),
        Scalable("Войд Волопаса", 2.5, 27),

        Scalable("Кеплер 10c", 31, 6),

        Scalable("Ланиакея", 5, 27),
    ]
