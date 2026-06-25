import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/ui/webtable.html");
  //   await page
  //     .locator(
  //       "//td[text()='John.Smith']//preceding-sibling::td/input[@type='checkbox']",
  //     )
  //     .click();
  //   let textDetails: string[] = await page
  //     .locator("//td[text()='John.Smith']//following-sibling::td")
  //     .allInnerTexts();
  //   console.log(textDetails);
  console.log(await getAllUser(page, "John.Smith"));
})();

async function selectUser(page: Page, userName: string): Promise<void> {
  return await page
    .locator(
      `//td[text()="${userName}"]//preceding-sibling::td/input[@type='checkbox']`,
    )
    .click();
}

async function getAllUser(page: Page, userName: string): Promise<String[]> {
  return await page
    .locator(`//td[text()="${userName}"]//following-sibling::td`)
    .allInnerTexts();
}
