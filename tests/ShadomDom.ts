import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  page = await browser.newPage();
  await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");
  await page.locator("#kils").fill("Veg Pizza");
  let frame1 = page.frameLocator("#pact1");
  let frame2 = frame1.frameLocator("#pact3");
  await frame1.locator("#jex").fill("Raghu");
  await frame2.locator("#glaf").fill("Hello");
})();
