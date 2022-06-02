@categoris  @products
Feature: Check webshop categories and products

  As a user I want to verify wehshop products and categories

@VisitorVerifyProduct
  Scenario: Visitor user can add product to cart
    Given User enters the webshop page
    When User selects category 2
    Then Add desired product 1 to cart
    And User selects cart
    Then Verify that desired product 1 is in cart
    And Empty cart

@verifyProduct
  Scenario: Registered user can add product to cart
    Given User enters the webshop page
    And Click on Login
    And Proceed with Login
    When User selects category 3
    Then Add desired product 2 to cart
    And User selects cart
    Then Verify that desired product 2 is in cart
    And Empty cart

@order
  Scenario: Place an order and logout
    Given User enters the webshop page
    And Click on Login
    And Proceed with Login
    When User selects category 2
    Then Add desired product 1 to cart
    And User selects cart
    Then Verify that desired product 1 is in cart
    When User selects Place order
    And Fill Order data
    Then The order is placed
    And Clicks on Logout button