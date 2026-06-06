import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let footerLocator: Locator[] = await page.locator("a.list-group-item").all();

  for (let e of footerLocator) {
    if ((await e.innerText()) === `Forgotten Password`) {
      await e.click();
    }
  }
})();
