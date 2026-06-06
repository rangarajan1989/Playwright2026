import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  let page = await browser.newPage();
  page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  //   window
  //     .getComputedStyle(
  //       document.querySelector('label[for="input-firstname"]')!,
  //       "::before",
  //     )
  //     .getPropertyValue("content");

  let content = await page.evaluate(() => {
    return window
      .getComputedStyle(
        document.querySelector('label[for="input-firstname"]')!,
        "::before",
      )
      .getPropertyValue("content");
  });
  console.log(content);
})();
