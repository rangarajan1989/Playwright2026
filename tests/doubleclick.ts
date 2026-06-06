import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  page = await browser.newPage();
  await page.goto("https://api.jquery.com/dblclick/");
  let frame = page.frameLocator("iframe");
  let click = frame.locator("div");
  await click.dblclick();
})();
