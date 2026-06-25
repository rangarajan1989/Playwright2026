import { chromium, Page } from "@playwright/test";
import { channel } from "diagnostics_channel";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chromium" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page.getByRole("textbox", { name: "E-Mail Address" }).fill("Raghu");
  await page.getByRole("textbox", { name: "Password" }).fill("Raghu@123456");
  await page.getByRole("button", { name: "Login" }).click();
})();
