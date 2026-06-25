import test, { chromium, Page } from "@playwright/test";

test("session storage", async () => {
  let browser = await chromium.launch({ headless: true, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page.locator("#input-email").fill("raghu@gmail.com");
  await page.locator("#input-password").fill("Light@1234");
  await page.locator("//input[@value='Login']").click();
  await page.context().storageState({ path: "auth/session.json" });
});
