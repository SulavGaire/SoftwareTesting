const {
    Before,
    BeforeAll,
    AfterAll,
    After,
    setDefaultTimeout,
  } = require("@cucumber/cucumber");
  const { chromium } = require("playwright");
  
  setDefaultTimeout(60000);
  BeforeAll(async function () {
    global.browser = await chromium.launch({
      // headless: true,
      headless: false,
      slowMo: 500,
    });
  });
  
  AfterAll(async function () {
    await global.browser.close();
  });
  
  Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
  });
  
  After(async function () {
    await global.page.close();
    await global.context.close();
  });
