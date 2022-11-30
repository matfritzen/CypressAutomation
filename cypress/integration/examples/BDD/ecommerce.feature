Feature: End to end Ecommerce validation


    Apllication Regression

    @Regression
    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thank You message

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    |name|gender|
    |bobz|Female|
    Then validate the forms behaviour
    And select the Shop Page