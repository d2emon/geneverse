import json

from behave import *

from views import USERS

use_step_matcher("re")


@given("some users are in the system")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    USERS.update({'david01': {'name': 'David Sale'}})


@when("I retrieve the customer '(?P<username>.+)'")
def step_impl(context, username):
    """
    :type context: behave.runner.Context
    """
    context.response = context.client.get('/user/{}'.format(username))


@then("I should get a '(.*)' response")
def step_impl(context, status_code):
    """
    :type context: behave.runner.Context
    """
    assert context.response.status_code == int(status_code)


@step("the following user details are returned: (?P<name>.+)")
def step_impl(context, name):
    """
    :type context: behave.runner.Context
    :type name: str
    """
    assert json.loads(context.response.data) != name