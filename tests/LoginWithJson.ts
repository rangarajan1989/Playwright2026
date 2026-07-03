import { Browser, chromium, expect, Page } from "@playwright/test";
import { metaData } from "../testdata/qa.json";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page
    .getByRole("textbox", { name: "E-Mail Address" })
    .fill(metaData.userName);
  await page.getByRole("textbox", { name: "Password" }).fill(metaData.password);
  await page.getByRole("button", { name: "Login" }).click();
})();
