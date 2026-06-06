import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  //   await page.goto("https://www.google.com/");
  //   await page.locator("textarea[name='q']").fill("naveen automation");
  //   let suggestion = page.locator("ul.G43f7e li");
  //   await suggestion.filter({ hasText: "lab playwright" }).click();
  //   await page.goto("https://www.flipkart.com/");
  //   await page.locator("input[name='q' ]").first().fill("macbook air");
  //   let suggestion = page.locator("ul li.Swx5kP");
  //   await suggestion.filter({ hasText: "air m2" }).click();
  await page.goto("https://www.amazon.in/");
  await page.locator("input[id='twotabsearchtextbox']").fill("macbook air");
  await page.waitForTimeout(2000);
  let suggestion = page.locator(
    "div.two-pane-results-container div[role='gridcell']",
  );
  let options: string[] = await suggestion.allInnerTexts();
  console.log(options);
  await suggestion.filter({ hasText: "m5 15 inch" }).click();
})();
