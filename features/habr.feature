# Created by d2emon at 05.08.18
Feature: Checking search
  Scenario: Сheck some text in search results
  Given website "ya.ru"
  Then push button with text 'Найти'
  Then page include text 'Задан пустой поисковый запрос'

  Scenario Outline: Second scenario
  Given some users are in the system
  When I retrieve the customer 'david01'
  Then I should get a '200' response
  And the following user details are returned: <name>
  Examples:
    | name |
    | David Sale |