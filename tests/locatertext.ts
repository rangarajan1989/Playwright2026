import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  let string = await page
    .getByText("Register Account", { exact: true })
    .textContent();
  console.log(string);

  let firstNameHtml = await page.locator("#input-firstname").innerHTML();
  console.log(firstNameHtml);
})();
