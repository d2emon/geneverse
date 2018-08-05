# Created by d2emon at 05.08.18
Feature: Handle storing, retrieving and deleting customer details

  Scenario Outline: Retrieve a customers details
  Given some users are in the system
  When I retrieve the customer 'david01'
  # Then I should get a '200' response
  Then I should get a '404' response
  And the following user details are returned: <name>
  Examples:
    | name |
    | David Sale |
    | Other Name |