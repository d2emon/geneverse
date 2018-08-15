import pytest
import random

from scale import MIN_SCALE, MAX_SCALE, metric, compared, in_scale


@pytest.fixture
def scales():
    yield range(MIN_SCALE, MAX_SCALE, 3)


def test_all_scales(scales):
    """
    Test point for being in (0, 1) range
    :return:
    """
    for scale in scales:
        print("{compared: <12}{metric: <4}{range: <15}{items}".format(
            compared=compared(scale),
            metric=metric(scale),
            range="10^{: <3}-10^{: <3}".format(scale - 1, scale + 1),
            items=list(in_scale(scale))
        ))

    # print("-=" * 40)

    # for scale in range(MIN_SCALE, MAX_SCALE):
    #     print("{compared: <12}{metric: <4}{range: <15}{items}".format(
    #         compared=compared(scale),
    #         metric=metric(scale),
    #         range="10^{: <3}".format(scale),
    #         items=list(in_scale(scale, scale + 1))
    #     ))

    assert scales is not None
