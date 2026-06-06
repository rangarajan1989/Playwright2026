import { Browser, chromium } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();

  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("I am raghu");
    console.log(dialog.type());
  });
  page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.getByText("Click for JS Alert").click();
  await page.getByText("Click for JS Confirm").click();
  await page.getByText("Click for JS Prompt").click();
})();
