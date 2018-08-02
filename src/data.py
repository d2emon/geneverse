# from nested.data import clean_things, THINGS
from nested.item import Item


def item_to_dict(item):
    return {
        # 'id': item.id,
        'name': item.name,
        'imagefile': item.image + '.jpg',
        'generator': item.type.name,
    }


def generate_thing(gen):
    item = Item.generate(gen)

    res = item_to_dict(item)
    res["children"] = [item_to_dict(child) for child in item.children]
    return res


def thing_meta(gen):
    item = Item.generate(gen)
    return {
        # 'id': item.id,
        'name': item.name,
        'name_generators': item.type.namegen.data,
        'generators': [{
            'type': g.value,
            'amount': g.amount,
            'probability': g.probability,
        } for g in item.type.generators],
    }


def list_generators():
    from nested.data import THINGS
    # global THINGS
    res = [{"name": thing} for thing in THINGS]
    return res
