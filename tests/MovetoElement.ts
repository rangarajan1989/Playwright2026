import { Browser, chromium, expect, Locator } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://www.spicejet.com/");
  await page.getByText("Add-ons", { exact: true }).hover();
  await page.getByTestId("test-id-You1st").click();
})();
