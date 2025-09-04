Feature: Checkout flow

  @UI
  Scenario Outline: Complete a checkout with two items
    Given I am logged in with username "<username>" and password "<password>"
    When I add "<product1>" and "<product2>" to the cart
    And I proceed to checkout with first name "<firstname>", last name "<lastname>", and zip code "<zipcode>"
    Then I should see the total price "<price>"
    And I should see a successful checkout message

    Examples:
    | username      | password     | product1          | product2                 | firstname | lastname | zipcode | price  |
    | standard_user | secret_sauce | Sauce Labs Onesie | Sauce Labs Fleece Jacket | Gandolf   | TheGrey  | 78649   | $62.62 |
    | standard_user | secret_sauce | Sauce Labs Bolt T-Shirt | Sauce Labs Bike Light | Jane   | McMillan  | 34367  | $28.06 |
