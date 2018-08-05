# -*- coding: utf-8 -*-
from behave import *
from selenium.webdriver import Chrome
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# import time


# Откроем главную страницу. Передадим в качестве аргумента адрес страницы.
@given('website "{url}"')
def step_impl(context, url):
    # Измените строку, для выполнения теста в другом браузере
    context.browser = Chrome()
    # context.browser.maximize_window()
    context.browser.get("http://ya.ru")


# Теперь нажмем на кнопку "Найти"
@then("push button with text '{text}'")
def step_impl(context, text):
    WebDriverWait(context.browser, 120).until(
        EC.element_to_be_clickable((By.XPATH, '//button'))
    )
    context.browser.find_element_by_xpath('//button').click()


@then("page include text '{text}'")
def step_impl(context, text):
    """
    Проверим, что мы на странице с результатами поиска, есть некоторый искомый текст
    :param context:
    :param text:
    :return:
    """
    WebDriverWait(context.browser, 120).until(
        EC.presence_of_element_located((By.XPATH, '//*[contains(text(), "%s")]' % text))
    )
    assert context.browser.find_element_by_xpath('//*[contains(text(), "%s")]' % text)
    context.browser.quit()


@given("some users are in the system")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    # raise NotImplementedError(u'STEP: Given some users are in the system')
    pass


@when("I retrieve the customer 'david01'")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    # raise NotImplementedError(u'STEP: When I retrieve the customer \'david01\'')
    pass


@then("I should get a '200' response")
def step_impl(context):
    """
    :type context: behave.runner.Context
    """
    # raise NotImplementedError(u'STEP: Then I should get a \'200\' response')
    pass


@step("the following user details are returned: {name}")
def step_impl(context, name):
    """
    :type context: behave.runner.Context
    :type name: str
    """
    # raise NotImplementedError(u'STEP: And the following user details are returned: <name>')
    pass