import { Browser, chromium, expect, Locator } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://orangehrm.com/contact-sales");
})();
