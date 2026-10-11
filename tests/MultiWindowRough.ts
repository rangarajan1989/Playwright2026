import { Browser, chromium } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ channel: "chrome", headless: false });

  let context = await browser.newContext();
  let page = await context.newPage();
  page.on("framenavigated", async () => {
    let cookie = page.locator(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
    );
    if (await cookie.isVisible()) {
      await cookie.click();
    }
  });

  await page.goto("https://orangehrm.com/contact-sales");
  const orangeHRMTitle = await page.title();
  console.log(orangeHRMTitle);
  await page.locator("//a[contains(@href,'facebook')]").click();
  await page.locator("//a[contains(@href,'linkedin')]").click();
  await page.locator("//a[contains(@href,'instagram')]").click();
  let numberofPages = context.pages();

  console.log(numberofPages.length);
  for (let p of numberofPages) {
    if ((await p.title()) !== orangeHRMTitle) {
      await p.close();
    }
  }
})();
