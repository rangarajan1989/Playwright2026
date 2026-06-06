import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  let context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });

  //basic auth pop up: username/password

  page = await context.newPage();
  let userName = "admin";
  let password = "admin";
  page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
})();
