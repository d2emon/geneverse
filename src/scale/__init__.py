from .data import ITEMS


MIN_SCALE = -37 # -36
MAX_SCALE = 30


def scale(scale_from, scale_to=None, items=ITEMS):
    if scale_to is None:
        scale_to = scale_from + 3

    return filter(lambda i: i.width.scale in range(scale_from, scale_to), items)


def all():
    sizes = {
        -24: "и",
        -21: "з",
        -18: "а",
        -15: "ф",
        -12: "п",
        -9: "н",
        -6: "мк",
        -3: "м",
        0: "",
        3: "к",
        6: "М",
        9: "Г",
        12: "Т",
        15: "П",
        18: "Э",
        21: "З",
        24: "И",
    }
    comments = {
        -24: "?",
        -21: "?",
        -18: "Кварк",
        -15: "Частица",
        -12: "Водород",
        -9: "Молекула",
        -6: "Бактерия",
        -3: "Насекомое",
        0: "Человек",
        3: "Город",
        6: "Планета",
        9: "Звезда",
        12: "Система",
        15: "Туманность",
        18: "Рукав",
        21: "Галактика",
        24: "Кластер",
        27: "Вселенная",
    }
    for i in range(MIN_SCALE, MAX_SCALE, 3):
        scale_text = "10^{} - 10^{}".format(i, i + 2)
        size = sizes.get(i + 1, "?") + "м"
        comment = comments.get(i + 1, "?")
        items = list(scale(i))
        print("{}\t{}\t{}\t{}".format(comment, size, scale_text, items))