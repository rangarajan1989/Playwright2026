import { Browser, chromium, expect, Locator } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/dropdowns.html",
  );
  await page
    .locator(
      `//div[@class='custom-select']/div/span[text()='Choose your preferred programming language']`,
    )
    .click();
  await page.getByText("Java", { exact: true }).click();
  await page
    .locator(
      `//div[@class='custom-select']/div/span[text()='Choose your preferred web framework']`,
    )
    .click();
  await page.getByText("React").click();
})();
