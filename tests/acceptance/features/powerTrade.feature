Feature: power trade
 As a user
 I want to fill the form
 So that I can import power from trader

  Scenario: user fills the form correctly
    Given the user has opened the form
    # And the user has successfully signed up
    When the user submits the form with following inputs
      | address   | Kathmandu  |
      | trader    | benergy    |
      | date      | 2024-01-10 |
      | from      | 2024-01-15 |
      | to        | 2024-01-20 |
      | uoc       | KW         |
      | volume    |        100 |
      | frequency | Hourly     |
    Then the user should be able to see changes in the page url

  Scenario: user fills the form with negative value in volume field
    Given the user has opened the form
    # And the user has successfully signed up
    When the user submits the form with following inputs
      | address   | Kathmandu  |
      | trader    | benergy    |
      | date      | 2024-01-10 |
      | from      | 2024-01-15 |
      | to        | 2024-01-20 |
      | uoc       | KW         |
      | volume    |       -100 |
      | frequency | Hourly     |
    Then the user should receive an error message "Value must be greater than or equal to 0."

  Scenario: user resets the form
    Given the user has opened the form
    # And the user has successfully signed up
    When the user resets the form after submitting following inputs
      | address   | Kathmandu  |
      | trader    | benergy    |
      | date      | 2024-01-10 |
      | from      | 2024-01-15 |
      | to        | 2024-01-20 |
      | uoc       | Kw         |
      | volume    |        100 |
      | frequency | Hourly     |
    Then all form fields should be cleared
      | address   |  |
      | trader    |  |
      | date      |  |
      | from      |  |
      | to        |  |
      | uoc       |  |
      | volume    |  |
      | frequency |  |
