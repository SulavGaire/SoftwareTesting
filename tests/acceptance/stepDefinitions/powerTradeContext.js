const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require("playwright/test");

const PowerTradePage = require("../PageObjects/PowerTradePage.js");
const powerTradePage = new PowerTradePage;

let initialUrl;

Given('the user has opened the form', async function () {
await powerTradePage.openForm();
const locator = await page.locator(powerTradePage.companyNameSelector);
await expect(locator).toBeVisible();
});

When('the user submits the form with following inputs', async function (dataTable) {
initialUrl = await page.url();
await powerTradePage.fillingForm(dataTable);
});

Then('the user should be able to see changes in the page url', async function () {
let finalUrl = await page.url();
await expect(finalUrl).not.toEqual(initialUrl);
});