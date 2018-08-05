from .data import ITEMS


MIN_SCALE = -37 # -36
MAX_SCALE = 30


def scale(scale_from, scale_to=None, items=ITEMS):
    if scale_to is None:
        scale_to = scale_from + 3

    return filter(lambda i: i.scale in range(scale_from, scale_to), items)


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
    for i in range(MIN_SCALE, MAX_SCALE, 3):
        scale_text = "10^{} - 10^{}".format(i, i + 2)
        size = sizes.get(i, "?") + "м"
        items = list(scale(i))
        print("{}\t{}\t{}".format(size, scale_text, items))