import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.locator("#input-firstname").focus();
  await page.locator("#input-firstname").fill("Raghu");
  await page.keyboard.press("Tab");
  await page.locator("#input-lastname").fill("Ragavan");
  await page.keyboard.press("Tab");
  await page.locator("#input-email").fill("ankita@gmail.com");
  await page.keyboard.press("Tab");
  await page.locator("#input-telephone").fill("994242233");
  await page.keyboard.press("Tab");
  await page.locator("#input-telephone").fill("994242233");
  await page.keyboard.press("Tab");
  await page.locator("#input-password").fill("Raghu@1234");
  await page.keyboard.press("Tab");
  await page.locator("#input-confirm").fill("Raghu@1234");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.getByRole("checkbox").click();
  await page.keyboard.press("Tab");
  await page.locator(`//input[@type="submit"]`).click();
})();
