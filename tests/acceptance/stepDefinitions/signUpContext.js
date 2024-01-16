const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
// const assert = require("assert");
let InitialUrl;
const SignUpPage = require("../PageObjects/SignUpPage");
const signUpPage = new SignUpPage();

Given("the user has browsed to the sign up page", async function () {
  await signUpPage.gotoSignUpPage();
});

When(
  "the user creates a new account with following attributes",
  async function (dataTable) {
    InitialUrl = await page.url();
    await signUpPage.createsAccount(dataTable);
  }
);

Then("the user should not be on sign up page", async function () {
  let FinalUrl = await page.url();
  console.log(FinalUrl);
  console.log(InitialUrl);
  await expect(FinalUrl).not.toEqual(InitialUrl);
});

When("the user clicks on the cross icon or cancel button", async function () {
  const signUpOption = page.getByRole("button", { name: "Sign Up" });
  await signUpPage.gotoSignUpPage();
  await signUpPage.cancelPageUsingButton();
  await expect(signUpOption).toBeVisible();
  await signUpPage.cancelPageUsingIcon();
});
Then("the user should see a sign up option on top", async function () {
  const signUPOption = page.getByRole("button", { name: "Sign Up" });
  await expect(signUPOption).toBeVisible();
});
