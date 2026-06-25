import { test, expect, chromium } from "@playwright/test";

test("has title", async ({}) => {
  let browser = await chromium.launch({ headless: true, channel: "chrome" });
  let page = await browser.newPage();

  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
