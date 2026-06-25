import test, { chromium, Page } from "@playwright/test";

test("Browser context", async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let context1 = await browser.newContext();
  let context2 = await browser.newContext();
  let page1 = await context1.newPage();
  let page2 = await context2.newPage();

  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page1.locator("#input-email").fill("raghu@gmail.com");
  await page1.locator("#input-password").fill("Light@1234");
  await page1.locator("//input[@value='Login']").click();

  await page1.waitForTimeout(3000);

  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  await page2.locator("#input-email").fill("sarika@gmail.com");
  await page2.locator("#input-password").fill("Light@1234");
  await page2.locator("//input[@value='Login']").click();

  await page2.waitForTimeout(4000);
});
