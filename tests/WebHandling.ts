import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://naveenautomationlabs.com/opencart/ui/webtable.html");
  //   await page
  //     .locator(
  //       `//td[text()='John.Smith']//preceding-sibling::td/input[@type="checkbox"]`,
  //     )
  //     .click();
  //   let userData: string[] = await page
  //     .locator(`//td[text()='John.Smith']/following-sibling::td`)
  //     .allInnerTexts();
  //   console.log(userData);

  //getUserData(page, "John.Smit");
  //await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  selectUser(page, "Nicole.Green");
})();

async function getUserData(page: Page, username: string) {
  return await page
    .locator(`//td[text()='${username}']/following-sibling::td`)
    .allInnerTexts();
}
async function selectUser(page: Page, username: string) {
  return await page
    .locator(`//td[text()="${username}"]/preceding-sibling::td`)
    .click();
}
