@login
Feature: Login to webshop

  Registered user can login
  Scenario: Registered user can login
    Given User enters the webshop page
    When User clicks on Login button
    And User enters login data
    Then User is logged in
    And User name is displayed
   
