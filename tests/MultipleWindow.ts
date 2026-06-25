import { Browser, chromium, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ channel: "chrome", headless: false });
  let context = await browser.newContext();
  let page = await context.newPage();

  // 1. Navigate to the sales page
  await page.goto("https://www.orangehrm.com/en/contact-sales/");

  // 2. Handle the cookie dialog explicitly once (No background listener!)
  let acceptCookies = page.locator(
    "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll",
  );
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }

  // 3. Capture new tabs cleanly using promises while clicking
  // This ensures Playwright catches them the moment they spawn
  const [facebookPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("img[alt='facebook']").click(),
  ]);

  const [linkedinPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("//a[contains(@href,'linkedin')]").click(),
  ]);

  const [youtubePage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("//a[contains(@href,'youtube')]").click(),
  ]);

  // 4. Print the main page title
  let organhrmTitle = await page.title();
  console.log("Main Page Title: " + organhrmTitle);

  // 5. Safely loop through and close child tabs
  let allPages: Page[] = context.pages();
  console.log("Total open tabs: " + allPages.length);

  for (let pg of allPages) {
    let currentTitle = await pg.title();
    console.log("Checking tab: " + currentTitle);

    // If it's a child tab, close it
    if (currentTitle !== organhrmTitle) {
      console.log(`Closing child tab: ${currentTitle}`);
      await pg.close();
    }
  }
})();
