Feature: Checkout flow

  Scenario: Complete a checkout with two items
    Given I am logged in with username "standard_user" and password "secret_sauce"
    When I add "Sauce Labs Onesie" and "Sauce Labs Fleece Jacket" to the cart
    And I proceed to checkout with first name "Jane", last name "McMillan", and zip code "34367"
    Then I should see the total price "$62.62"
    And I should see a successful checkout message
