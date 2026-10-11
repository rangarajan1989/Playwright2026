import { Browser, chromium } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  //   await page.goto(
  //     "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  //   );
  //   await page.getByPlaceholder("First Name").fill("raghu");
  //   await page.getByPlaceholder("Last Name").fill("ragavan");
  //   await page.getByPlaceholder("E-Mail").fill("raghu@gmail.com");

  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page.locator("#input-email").fill("raghu@gmail.com");
  await page.locator("#input-password").fill("Light@1234");
  await page.locator("//input[@value='Login']").click();
  //await page.waitForTimeout(4000);
  let account: String | null = await page
    .getByText("My Account")
    .nth(2)
    .innerText();
  console.log(account);
})();
