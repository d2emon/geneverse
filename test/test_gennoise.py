import pytest
import random

from gennoise import point, nofilter, white, gennoise


@pytest.fixture
def x():
    return random.randrange(512)


@pytest.fixture
def y():
    return random.randrange(512)


def test_point(x, y):
    """
    Test point for being in (0, 1) range
    :return:
    """
    p = point(x, y, 32.0, 4)
    assert p > 0
    assert p < 1


def test_nofilter(x, y):
    """
    Test for not changing value by default
    :return:
    """
    value = random.randrange(512)
    assert nofilter(x, y, value) == value


def test_white(x, y):
    """
    Test for not changing value by default
    :return:
    """
    color = white(x, y)
    assert color[0] == 255
    assert color[1] == 255
    assert color[2] == 255


def test_gennoise(x, y):
    """
    Test for not changing value by default
    :return:
    """
    noise = gennoise(512, 512)

    assert noise[x, y][0] >= 0
    assert noise[x, y][1] >= 0
    assert noise[x, y][2] >= 0
    assert noise[x, y][0] < 256
    assert noise[x, y][1] < 256
    assert noise[x, y][2] < 256