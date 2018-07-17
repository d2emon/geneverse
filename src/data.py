from nested.data import clean_things, THINGS
from nested.item import Item


tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web',
        'done': False
    }
]

clean_things()


def item_to_dict(item):
    return {
        'id': item.id,
        'name': item.name,
        'imagefile': item.image + '.jpg',
        'generator': item.type.name,
    }


def generate_thing(gen):
    item = Item(gen)
    item.grow()

    res = item_to_dict(item)
    res["children"] = [item_to_dict(child) for child in item.children]
    return res


def thing_meta(gen):
    item = Item(gen)
    return {
        'id': item.id,
        'name': item.name,
        'name_generators': item.type.namegen.data,
        'generators': [{
            'type': g.value,
            'amount': g.amount,
            'probability': g.probability,
        } for g in item.type.generators],
    }


def list_generators():
    global THINGS
    res = [{"name": thing} for thing in THINGS]
    return res