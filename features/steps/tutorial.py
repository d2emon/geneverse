from behave import *


@given('we have behave installed')
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    # raise NotImplementedError(u'STEP: Given we have behave installed')
    pass


@when('we implement a test')
def step_impl(context):
    assert True is not False


@then('behave will test it for us!')
def step_impl(context):
    assert context.failed is False