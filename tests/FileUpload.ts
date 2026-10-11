import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  page = await browser.newPage();
  await page.goto("https://practice.expandtesting.com/upload"); // Upload single file
  //attach the file
  await page
    .locator("#fileInput")
    .setInputFiles("/Users/naveenautomationlabs/Documents/userresponse.json");
  //upload the file:
  await page.locator("#fileSubmit").click();
})();
