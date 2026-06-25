import { chromium, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  let linksLocator: Locator[] = await page.locator("a.list-group-item").all();

  for (let a of linksLocator) {
    if ((await a.innerText()) === `Forgotten Password`) {
      await a.click();
    }
  }
})();
