import pytest

import random


@pytest.fixture
def seq():
    return list(range(10))


def test_shuffle(seq):
    """
    Убедимся в том, что метод shuffle действительно перемешивает список
    :return:
    """
    oldSeq = [s for s in seq]
    random.shuffle(seq)
    assert seq != oldSeq


def test_choice(seq):
    """
    Метод choice обязан вернуть случайный элемент из переданного ему списка
    :return:
    """
    element = random.choice(seq)
    assert element in seq
