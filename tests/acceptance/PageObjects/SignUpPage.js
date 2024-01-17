const path = require("path");
const util = require("util");

class SignUpPage {
  constructor() {
    this.baseUrl = path.dirname(__filename) + "/../../../htmlFIle";
    this.signUpUrl = this.baseUrl + "/createUser.html";

    this.emailBoxSelector = `//input[@name="email"]`;
    this.passwordBoxSelector = `//input[@name="psw"]`;
    this.repasswordBoxSelector = `//input[@name="psw-repeat"]`;
    this.locationSelector = `//select[@name="loc"]`;
    this.genderSelector = `//input[@value="%s"]`;
    this.rememberMeSelector = `//input[@name="remember"]`;
    this.signUpButtonSelector = `//button[@type="submit"]`;
    this.closeIconSelector = `//span[@title="Close Modal"]`;
    this.cancelButtonSelector = `//button[@class="cancelbtn"]`
  }

  async gotoSignUpPage() {
    await page.goto(this.signUpUrl);
  }

  async createsAccount(dataTable) {
    const data = [];
    for (const userData of dataTable.raw()) {
      data.push(userData[1]);
    }
    await page.getByRole("button", { name: "Sign Up" }).click();
    await page.fill(this.emailBoxSelector, data[0]);
    await page.fill(this.passwordBoxSelector, data[1]);
    await page.fill(this.repasswordBoxSelector, data[1]);
    await page.locator(this.locationSelector).selectOption(data[2]);
    await page.locator(util.format(this.genderSelector, data[3])).check();
    await page.locator(this.rememberMeSelector).uncheck();
    await page.click(this.signUpButtonSelector);
  }

  async cancelPageUsingButton() {
    await page.getByRole("button", { name: "Sign Up" }).click();
    await page.locator(this.cancelButtonSelector).click();
  }

  async cancelPageUsingIcon() {
    await page.getByRole("button", { name: "Sign Up" }).click();
    await page.locator(this.closeIconSelector).click();
  }
  
}
module.exports = SignUpPage;