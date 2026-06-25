import test, { chromium, Page } from "@playwright/test";

test.use({ storageState: "auth/session.json" });

test("session storage useage", async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart",
  );
  await page.waitForTimeout(5000);
});
