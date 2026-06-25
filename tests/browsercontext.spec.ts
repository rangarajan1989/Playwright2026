import {
  Browser,
  BrowserContext,
  chromium,
  Page,
  test,
} from "@playwright/test";
import { channel } from "node:diagnostics_channel";

test("Browser Context", async () => {
  let browser: Browser = await chromium.launch({ headless: false });

  let browserContext1: BrowserContext = await browser.newContext();
  let browserContext2: BrowserContext = await browser.newContext();
  let page1: Page = await browserContext1.newPage();
  await page1.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page1.locator("#input-email").fill("raghu@gmail.com");
  await page1.locator("#input-password").fill("Light@1234");
  await page1.locator("//input[@value='Login']").click();

  let page2: Page = await browserContext2.newPage();
  await page2.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  await page2.locator("#input-email").fill("sarika@gmail.com");
  await page2.locator("#input-password").fill("Light@1234");
  await page2.locator("//input[@value='Login']").click();

  await page1.waitForTimeout(5000);
  await page2.waitForTimeout(5000);
});
