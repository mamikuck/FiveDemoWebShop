@logout
Feature: Logout from webshop

   Logged in user can logout
  Scenario: Logged in user can log out
    Given User enters the webshop page
    And Click on Login
    And Proceed with Login
    When User clicks on Logout button
    Then User is logged out
    And Login button is displayed
    

    