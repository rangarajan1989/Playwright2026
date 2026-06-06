import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("link", { name: "Continue" }).click();

  await page.getByRole("textbox", { name: "First Name" }).fill("raghu");
  await page.getByRole("textbox", { name: "Last Name" }).fill("ragavan");

  await page.getByPlaceholder("E-Mail").fill("raghu23@gmail.com");
  await page.getByRole("radio", { name: "Yes" }).click();
  await page.getByRole("checkbox").click();
  await page.waitForTimeout(3000);
  await page.getByRole("checkbox").click();
})();
