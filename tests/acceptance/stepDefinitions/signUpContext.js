const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test")
const SignUpPage = require("../PageObjects/SignUpPage");
const signUpPage = new SignUpPage();

    Given ("the user has browsed to the sign up page", async function () {
      await signUpPage.gotoSignUpPage();
    });

    When ("the user creates a new account with following attributes",
      async function (dataTable) {
        await signUpPage.createsAccount(dataTable);
      }
    );
    
    Then ("the user should not be on sign up page", async function () {
      // try {
      //   // some code that may throw ERR_FILE_NOT_FOUND
      //   signUpPage.pressSignUpButton();
      // } catch (error) {
      //   // check if the error is ERR_FILE_NOT_FOUND
      //   assert.equal(error.message, 'ERR_FILE_NOT_FOUND');
      // }
      let currentUrl = page.url();
      expect(signUpPage.SignUpUrl).not.toEqual(currentUrl);
    });
