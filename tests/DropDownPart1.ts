import { chromium, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/ui/dropdowns.html",
  );
  await page.getByText("Choose your preferred programming language").click();
  await page.getByText("JavaScript").click();
})();
