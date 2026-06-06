import { Browser, chromium, expect, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
  );
  await page.getByRole("link", { name: "naveenopencart" }).highlight();
  await page.locator("//input[@value='Login']").click();
  let text = await page.getByText("Warning: Your account has").innerText();
  console.log(text);
  //   expect(
  //     "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.",
  //     text,
  //   );
  expect(text).toBe(
    " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.",
  );
})();
