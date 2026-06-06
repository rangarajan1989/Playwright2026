import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(3000);
  // let links: string[] = await page.locator("a[href]").allInnerTexts();
  let imgs = await page.locator("img[alt]").all();
  //console.log(imgs);

  for (let i of imgs) {
    console.log(await i.getAttribute("alt"));
  }
})();
