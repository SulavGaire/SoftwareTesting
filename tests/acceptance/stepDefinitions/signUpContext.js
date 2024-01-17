const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
// const assert = require("assert");

let initialUrl;

const SignUpPage = require("../PageObjects/SignUpPage");
const signUpPage = new SignUpPage();

Given("the user has browsed to the sign up page", async function () {
  await signUpPage.gotoSignUpPage();
});

When("the user creates a new account with following attributes", async function (dataTable) {
    initialUrl = await page.url();
    await signUpPage.createsAccount(dataTable);
  }
);

Then("the user should not be on sign up page", async function () {
  let finalUrl = await page.url();
  await expect(finalUrl).not.toEqual(initialUrl);
});

When("the user clicks on the cross icon or cancel button", async function () {
  const signUpOption = page.getByRole("button", { name: "Sign Up" });
  await signUpPage.gotoSignUpPage();
  await signUpPage.cancelPageUsingButton();
  await expect(signUpOption).toBeVisible();
  await signUpPage.cancelPageUsingIcon();
});

Then("the user should see a sign up option on top", async function () {
  const signUpOption = page.getByRole("button", { name: "Sign Up" });
  await expect(signUpOption).toBeVisible();
});
