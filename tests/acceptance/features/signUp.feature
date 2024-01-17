Feature: sign up
 As a user
 I want to sign up
 So that I can create an account

  Scenario: user creates a new account
    Given the user has browsed to the sign up page
    When the user creates a new account with following attributes
      | Email    | softflow@gmail.com |
      | Password | softflow@&&        |
      | Location | Bhaktapur          |
      | Gender   | female             |
      | Checkbox | remember           |
    Then the user should not be on sign up page


  Scenario: user clicks on cross icon or cancel button
    Given the user has browsed to the sign up page
    When the user clicks on the cross icon or cancel button
    Then the user should see a sign up option on top


  Scenario: user checks the remember me option
    Given the user has browsed to the sign up page
    And the user has filled the form with following attributes
      | Email    | softflow@gmail.com |
      | Password | softflow@&&        |
      | Location | Bhaktapur          |
      | Gender   | female             |
      | Checkbox | remember           |
    When the user clicks on remember me option and sign up
    Then the user's information should be pre-filled in the respective fields
      | Email    | softflow@gmail.com |
      | Password | softflow@&&        |
      | Location | Bhaktapur          |
      | Gender   | female             |
      | Checkbox | remember           |


  Scenario: user unchecks the remember me option
    Given the user has browsed to the sign up page
    And the user has filled the form with following attributes
      | Email    | softflow@gmail.com |
      | Password | softflow@&&        |
      | Location | Bhaktapur          |
      | Gender   | female             |
      | Checkbox | remember           |
    When the user unchecks on remember me option and sign up
    Then the user's information should be empty in the respective fields
      | Email    |  |
      | Password |  |
      | Location |  |
      | Gender   |  |
      | Checkbox |  |
