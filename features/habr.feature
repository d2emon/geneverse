# Created by d2emon at 05.08.18
Feature: Checking search
  Scenario: Сheck some text in search results
  Given website "ya.ru"
  Then push button with text 'Найти'
  Then page include text 'Задан пустой поисковый запрос'