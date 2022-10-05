Feature: End to End E-commerce validation

    Apllication Regression

    @Regression
    Scenario: Ecommerce Product Delivery
    Given I open ECommerce Page
    When I add items to cart
    And validate the total price
    Then select the country & verify Thanks message

    @Smoke
    Scenario: Filling the form to go to shop
    Given I open ECommerce Page
    When I fill the form details
    |name    | Gender  |
    |minhaj  | Male    |
    Then validate the form behavior
    And Select the shop page