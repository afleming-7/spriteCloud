Feature: Checkout flow

  Scenario: Complete a checkout with two items
    Given I am logged in with valid credentials
    When I add two products to the cart
    And I proceed to checkout with my details
    Then I should see the correct total price
    And I should see a successful checkout message
