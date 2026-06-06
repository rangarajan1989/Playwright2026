import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  page = await browser.newPage();
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  page.locator(`//span[text()='right click me']`).click({ button: "right" });
  let options: string[] = await page
    .locator(`ul.context-menu-list.context-menu-root li`)
    .allInnerTexts();
  console.log(options);
  await page.getByText("Copy", { exact: true }).click();
})();
