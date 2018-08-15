from ..scalable import Scalable, Distance
from .space.galaxy import ITEMS as GALAXIES
from .space.star_system import ITEMS as STAR_SYSTEM

SOTU = [
    Scalable("Планковская длина", 1.6, -35),
    Scalable("Квантовая пена", 1, -35),
    Scalable("Суперструна", 1, -35),
    Scalable("Нейтрино", 1, -24),

    Scalable("Верхний Кварк", 0.1, -21),

    Scalable("Высокоэнергетическое Нейтрино", 15, -21),
    Scalable("Преон", 1, -21),

    Scalable("Нижний Кварк", 30, -21),

    Scalable("Очарованный Кварк", 0.1, -18),
    Scalable("Странный Кварк", 0.4, -18),
    Scalable("Истинный Кварк", 1, -18),
    Scalable("Прелестный Кварк", 1, -18),
    Scalable("Ядро электрона", 1, -18),

    Scalable("Слабые Силы", 10, -18),

    Scalable("Неподтвержденные размеры", 0.1, -15),
    Scalable("Протон", 1, -15),
    Scalable("Нейтрон", 1, -15),
    Scalable("Ядро Гелия", 3, -15),
    Scalable("Электрон (Классический)", 5, -15),
    Scalable("Ядро Хлора", 6, -15),
    Scalable("Ядро Урана", 15, -15),
    Scalable("Атомное Ядро (Среднее)", 10, -15),

    Scalable("Длина Волны Гамма-излучения", 1, -12),

    Scalable("Electron Compton Wavelength", 2, -12),

    Scalable("Атом Гелия", 25, -12),
    Scalable("Атом Водорода", 31, -12),

    Scalable("Молекула Воды", 0.28, -9),
    Scalable("Атом Углерода", 0.34, -9),
    Scalable("Атом Серы", 0.1, -9),
    Scalable("Атом Цезия", 0.23, -9),

    Scalable("Alpha Helix", 0.5, -9),

    Scalable("Глюкоза", 0.8, -9),
    Scalable("Длина Волны Рентгенновского Излучения", 0.5, -9),
    Scalable("Углеродная Нанотрубка", 1, -9),

    Scalable("Buckyball", 1, -9),

    Scalable("Фосфолипид", 2.5, -9),
    Scalable("ДНК", 3, -9),

    Scalable("Phospholipid Bilayer", 5, -9),

    Scalable("Транзисторный Переход", 25, -9),

    Scalable("Porcine circovirus", 17, -9),

    Scalable("Вирус Гепатита B", 42, -9),
    Scalable("ВИЧ", 90, -9),
    Scalable("Клеточная Мембрана", 10, -9),
    Scalable("Длина Волны Ультрафиолетового Света", 60, -9),

    Scalable("Глубина Пита Комакт-Диска", 0.12, -6),
    Scalable("Наибольшее Разрешение Оптического Микроскопа", 0.2, -6),
    Scalable("Бактериофаг", 0.2, -6),

    Scalable("Mimivirus", 0.4, -6),

    Scalable("Самый Большой Вирус", 0.44, -6),
    Scalable("Длина Волны Фиолетового Света", 0.4, -6),
    Scalable("Наибольшая частица, способная проникнуть сквозь хирургическую маску", 1, -6),

    Scalable("E. coli", 2, -6),

    Scalable("Частица Глины", 2, -6),
    Scalable("X Хромосома", 4, -6),
    Scalable("Y Хромосома", 1.5, -6),
    Scalable("Длина Волны Красного Света", 0.75, -6),
    Scalable("Митохондрия", 4, -6),
    Scalable("Красная Кровяная Клетка", 7, -6),
    Scalable("Хлоропласт", 8, -6),
    Scalable("Клеточное Ядро", 7, -6),
    Scalable("Белая Кровяная Клетка", 10, -6),
    Scalable("Капля Тумана", 20, -6),

    Scalable("Thou", 25.4, -6),
    Scalable("Twip", 17.6, -6),

    Scalable("Толщина Акриловой Нити", 12, -6),
    Scalable("Толщина Шелковой Нити", 15, -6),
    Scalable("Клетка Кожи", 35, -6),
    Scalable("Длина Волны Инфракрасного Света", 15, -6),

    Scalable("Slit Particle", 50, -6),
    Scalable("Pollen Grain", 50, -6),

    Scalable("Разрешение Человеческого Глаза", 0.1, -3),
    Scalable("Человеческая Яйцеклетка", 0.12, -3),
    Scalable("Толщина Человеческого Волоса", 0.1, -3),
    Scalable("Толщина Бумаги", 0.15, -3),

    Scalable("Ciliate Protist", 0.2, -3),
    Scalable("Paramecium", 0.2, -3),

    Scalable("Амеба", 0.3, -3),
    Scalable("Пылевой Клещ", 0.3, -3),
    Scalable("Пиксель ЖКМ", 0.3, -3),
    Scalable("Кристалл Соли", 0.5, -3),
    Scalable("Крупнейшая Бактерия", 0.75, -3),
    Scalable("Песчинка", 0.5, -3),
    Scalable("Толщина Человеческой Кожи", 0.5, -3),
    Scalable("Толщина Кредитной Карты", 0.7, -3),

    Scalable("Duckweed", 2, -3),

    Scalable("Муравей", 4, -3),
    Scalable("Семечка Подсолнечника", 7, -3),
    Scalable("Град", 5, -3),
    Scalable("Рисовое Зерно", 5, -3),
    Scalable("Толщина Грифеля", 0.7, -3),
    Scalable("Толщина Человеческой Кожи (подошвы)", 4, -3),
    Scalable("Зерно Сезама", 3, -3),
    Scalable("Микрочип", 4, -3),

    Scalable("Кофейное Зерно", 10, -3),
    Scalable("Яйцо Колибри", 12, -3),
    Scalable("Стеклянный Шарик", 15, -3),
    Scalable("Длина Волны Микроволновки", 10, -3),
    Scalable("Квадратный Дюйм", 25, -3),
    Scalable("Пенни США", 19, -3),
    Scalable("Снежинка", 10, -3),
    Scalable("Перепелиное Яйцо", 30, -3),
    Scalable("Дождевой Червь", 40, -3),
    Scalable("Спичка", 50, -3),
    Scalable("Куриное Яйцо", 55, -3),
    Scalable("Кубик Рубика", 55, -3),

    Scalable("Стакан", 0.12, 0),
    Scalable("Страусиное Яйцо", 0.15, 0),
    Scalable("Землеройка", 0.1, 0),
    Scalable("Колибри", 0.1, 0),
    Scalable("Это Окно", 0.2, 0),
    Scalable("Чайник Рассела", 0.25, 0),
    Scalable("Крупнейшая Градина", 0.2, 0),
    Scalable("Крупнейшая Снежинка", 0.38, 0),
    Scalable("Баскетбольный Мяч", 0.24, 0),
    Scalable("Дюймовая Линейка", 0.3, 0),
    Scalable("Дронт", 1, 0),
    Scalable("Маленький Пляжный мяч", 0.5, 0),
    Scalable("Большой Пляжный мяч", 1, 0),
    Scalable("Раффлезия", 1, 0),
    Scalable("Человек", 1.7, 0),
    Scalable("Гигантский Дождевой Червь", 3, 0),
    Scalable("Подсолнечник", 2.5, 0),
    Scalable("Странствующий Альбатрос", 3, 0),
    Scalable("FM Волна", 1, 0),
    Scalable("Машина", 4, 0),
    Scalable("Высота дома", 2.5, 0),
    Scalable("Японский Краб", 3, 0),
    Scalable("Автобус", 12, 0),
    Scalable("Слон", 5, 0),
    Scalable("Жираф", 6, 0),
    Scalable("Тирранозавр Рекс", 7, 0),
    Scalable("Анаконда", 8, 0),
    Scalable("Лунный Модуль Аполло", 9, 0),
    Scalable("Сагуаро", 14, 0),
    Scalable("Дом", 15, 0),
    Scalable("Дуб", 15, 0),

    Scalable("Amphilicoelias fragilimus", 60, 0),

    Scalable("Синий Кит", 30, 0),

    Scalable("Redwood Tree", 0.1, 3),

    Scalable("Боинг 747", 65, 0),
    Scalable("Статуя Свободы", 93, 0),
    Scalable("МКС", 0.108, 3),
    Scalable("Сатурн V", 0.11, 3),
    Scalable("Футбольное поле", 0.1097, 3),
    Scalable("Титаник", 0.27, 3),

    Scalable("Gateway Arc", 0.192, 3),

    Scalable("Эйфелева Башня", 0.32, 3),
    Scalable("Пирамиды в Гизе", 0.15, 3),
    Scalable("Монумент Вашингтона", 0.169, 3),
    Scalable("Дамба Гувера", 0.22, 3),

    Scalable("Half Dome", 0.41, 3),
    Scalable("International Commercial Centre", 0.484, 3),
    Scalable("Sears Tower", 0.442, 3),

    Scalable("Ватикан", 0.8, 3),
    # Бурж Халифа
    Scalable("Водопад Анхель", 0.979, 3),

    Scalable("Boeing Everett Factory", 1, 3),
    Scalable("Stanford Linear Accelerator", 3, 3),
    Scalable("Uluru", 3, 3),
    Scalable("Cruithne", 5, 3),

    Scalable("Центральный Парк", 4, 3),
    Scalable("AM Волна", 1, 3),

    Scalable("Palm Jebel Ali", 8, 3),

    Scalable("Большой Адронный Коллайдер", 8.6, 3),
    Scalable("Комета Галлея", 11, 3),
    Scalable("Деймос", 13, 3),
    Scalable("Эверест", 8.8, 3),
    Scalable("Марианская Впадина", 10.9, 3),
    Scalable("Фобос", 23, 3),
    Scalable("Марафон", 42.2, 3),
    Scalable("Нейтронная Звезда", 24, 3),
    Scalable("Род Айленд", 75, 3),

    Scalable("Ganymed", 32, 3),
    Scalable("Bianca", 54, 3),
    Scalable("Belinda", 80, 3),
    Scalable("Nix", 80, 3),

    Scalable("Гидра", 0.1, 6),

    Scalable("Dysnomia", 0.15, 6),
    Scalable("Galatea", 0.16, 6),
    Scalable("Nereid", 0.34, 6),
    Scalable("Miranda", 0.47, 6),

    Scalable("Бруней", 0.12, 6),
    Scalable("Западная Вирджиния", 0.4, 6),
    Scalable("Великий Каньон", 0.45, 6),
    Scalable("Руанда", 0.24, 6),
    Scalable("Италия", 1.1, 6),
    Scalable("Калифорния", 1.2, 6),
    Scalable("Техас", 1.2, 6),
    Scalable("Церера", .95, 6),
    Scalable("Плутон", 2.4, 6),
    Scalable("Харон", 1.2, 6),

    Scalable("Quaoar", 1.3, 6),

    Scalable("Седна", 1.8, 6),

    Scalable("Eris", 2.4, 6),

    Scalable("Большой Барьерный Риф", 2.6, 6),
    Scalable("Великая Китайская Стена", 8.85, 6),
    Scalable("Тритон", 2.7, 6),
    Scalable("Каллисто", 4.8, 6),
    Scalable("Ганимед", 5.3, 6),
    Scalable("Европа", 3.1, 6),
    Scalable("Ио", 3.6, 6),
    Scalable("Луна", 3.5, 6),
    Scalable("Титан", 5.2, 6),
    Scalable("Титания", 1.6, 6),
    Scalable("Меркурий", 4.9, 6),
    Scalable("США", 4.2, 6),
    Scalable("Марс", 6.8, 6),
    Scalable("Земля", 12.7, 6),
    Scalable("Венера", 12, 6),
    Scalable("Азия", 8, 6),

    Scalable("Сириус B", 200, 6),
    Scalable("Нептун", 49, 6),
    Scalable("Уран", 51, 6),
    Scalable("Сатурн", 123, 6),
    Scalable("Юпитер", 140, 6),

    Scalable("Gliese 229B", 0.11, 9),
    Scalable("Wolf 359", 0.15, 9),
    Scalable("TrES-4", 0.23, 9),

    Scalable("Проксима Центавра", 0.2, 9),
    Scalable("От Земли До Луны", 0.38, 9),
    Scalable("Самая длинная радиоволна", .1, 9),

    Scalable("Luyten's Star", 0.42, 9),
    Scalable("Kapteyn's Star", 0.42, 9),

    Scalable("Солнце", 1.4, 9),

    Scalable("Gliese 229A", 0.96, 9),

    Scalable("Альфа Центавра B", 1, 9),
    Scalable("Альфа Центавра A", 1.5, 9),
    Scalable("Сириус A", 2.5, 9),
    Scalable("Альтаир", 2.6, 9),
    Scalable("Вега", 3.8, 9),
    Scalable("Процион", 2.9, 9),
    Scalable("Регул", 5.8, 9),
    Scalable("Поллукс", 11, 9),
    Scalable("Спика", 9.6, 9),
    Scalable("Суммарная высота человечества", 10, 9),
    Scalable("Капелла", 17, 9),

    Scalable("Albireo", 22, 9),
    Scalable("VV Cephei B", 20, 9),

    Scalable("Арктур", 36, 9),
    Scalable("Полярная", 40, 9),
    Scalable("Альдебаран", 64, 9),
    Scalable("Альнитак", 84, 9),
    Scalable("Расстояние от Меркурия до Солнца", 60, 9),
    Scalable("Ригель", 97, 9),

    Scalable("Расстояние от Земли до Солнца", 0.15, 12),

    Scalable("Gacrux", 0.16, 12),

    Scalable("Денеб", 0.31, 12),

    Scalable("La Superba", 0.42, 12),
    Scalable("R Doradus", 0.52, 12),
    Scalable("Pistol Star", 0.47, 12),
    Scalable("Антарес", 0.97, 12),
    Scalable("S Doradus", 0.77, 12),
    Scalable("V382 Carinei", 1, 12),
    Scalable("V838 Monocerotis", 1.1, 12),

    Scalable("Расстояние от Юпитера до Солнца", 0.78, 12),

    Scalable("Бетельгейзе", 1.3, 12),
    Scalable("Мю Цефея", 1.9, 12),

    Scalable("WOH G64", 2.8, 12),
    Scalable("VV Cephei A", 2.4, 12),

    Scalable("VY Малых Псов", 3, 12),

    Scalable("Herschel's Garnet Star", 1.9, 12),
    Scalable("KY Cygni", 2, 12),
    Scalable("V354 Cephei", 2.1, 12),

    Scalable("Расстояние от Нептуна до Солнца", 4.5, 12),
    Scalable("Расстояние от Плутона до Солнца", 5.9, 12),
    Scalable("Пояс Койпера", 15, 12),
    Scalable("Расстояние от Вояджера 1 до Земли", 17, 12),
    Scalable("Световой День", 26, 12),

    Scalable("Homunculus Nebula", 20, 12),

    Distance("которое прошла Земля относительно Солнца", 4.5, 21),
    Distance("до HDF", 0.127, 27),  # ?
] + GALAXIES + STAR_SYSTEM
