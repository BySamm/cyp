Feature: End to End Ecommerce validation

  Application validation

  @Regression
  Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add Items to cart
    And Validate the total
    Then Select the country, submit and verify for success message

  @Smoke
  Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form
      | name | gender |
      | bobs | Male   |
    Then I Validate form behavior
    And Select shop page