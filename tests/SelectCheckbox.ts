import { Browser, chromium, expect, Locator } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/ui/webtable.html");
  let checkLocator = await page.locator(`input[id*='ohrmList']`).all();
  for (let i = 1; i < checkLocator.length; i++) {
    await checkLocator[i].click();
  }
})();
