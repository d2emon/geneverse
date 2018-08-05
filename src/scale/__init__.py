from .data import ITEMS


MIN_SCALE = -36
MAX_SCALE = 30


def scale(scale_from, scale_to=None, items=ITEMS):
    if scale_to is None:
        scale_to = scale_from + 3

    return filter(lambda i: i.scale in range(scale_from, scale_to), items)


def all():
    for i in range(MIN_SCALE, MAX_SCALE, 3):
        scale_text = "10^{} - 10^{}".format(i, i + 2)
        items = list(scale(i))
        print("{}\t{}".format(scale_text, items))