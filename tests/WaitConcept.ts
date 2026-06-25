import { Browser, chromium, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ channel: "chrome", headless: false });
  let page = await browser.newPage();
  // page.setDefaultTimeout(10000);
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
    {
      timeout: 5000,
    },
  );

  let firstname: Locator = page.locator(`#input-firstname11`);

  firstname.waitFor({ state: "visible", timeout: 5000 });
  firstname.fill("asdasd");
})();
