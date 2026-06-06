import { Browser, chromium, expect, Locator, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  let footer: Locator[] = await page.locator("footer a").all();
  let footerArray = [];
  for (let f of footer) {
    let text = await f.innerText();
    footerArray.push(text);
  }

  console.log(footerArray);
})();
