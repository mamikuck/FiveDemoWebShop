@createAccount
Feature: As a User I want to create new account

  As a Visitor user can create an account

@focus 
  Scenario: As a Visitor I create new account
 
    Given User enters the webshop homepage
    Then The webshop homepage is displayed
    When User clicks on Contact button
    Then The Contact form is displayed
    When The user clicks on Sign up button
    And The user enters new account data
   

