import pytest
import random

from nested.item import Item
from nested.data import THINGS
from d2data import item_to_dict, generate_thing, thing_meta, list_generators


@pytest.fixture
def item():
    return Item.generate("universe")


def test_item_to_dict(item):
    d = item_to_dict(item)
    assert d.get('name') == item.name
    assert d.get('imagefile') == item.image + ".jpg"
    assert d.get('generator') == item.type.name


def test_generate_thing():
    thing = generate_thing("universe")
    for child in thing.get('children'):
        assert child.get('name') is not None
        assert child.get('imagefile') is not None
        assert child.get('generator') is not None


def test_thing_meta(item):
    meta = thing_meta("universe")
    assert meta.get('name') == item.name
    assert meta.get('name_generators') == item.type.namegen.data
    assert len(meta.get('generators')) == len(item.type.generators)


def test_list_generators():
    assert len(list_generators()) == len(THINGS)
