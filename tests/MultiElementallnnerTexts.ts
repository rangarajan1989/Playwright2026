import { Browser, chromium, expect, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );

  let footerLocator: string[] = await page
    .locator("a.list-group-item")
    .allInnerTexts();

  console.log(footerLocator);
  for (let i of footerLocator) {
    if (i === `Forgotten Password`) {
      await page.getByText(i).first().click();
    }
  }
})();
