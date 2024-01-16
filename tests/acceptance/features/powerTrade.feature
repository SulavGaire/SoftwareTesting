Feature: power trade
 As a user
 I want to fill the form
 So that I can import power from trader

  Scenario: user fills the form correctly
    Given the user has opened the form
    When the user submits the form with following inputs
      | address   | Kathmandu  |
      | trader    | benergy    |
      | date      | 2024-01-10 |
      | from      | 2024-01-15 |
      | to        | 2024-01-20 |
      | uoc       | kw         |
      | volume    |        100 |
      | frequency | Hourly     |
    Then the user should be able to see changes in the page url
