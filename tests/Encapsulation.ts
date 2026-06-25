import type { Page } from "@playwright/test";

class LoginPage {
  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator("button[type='submit']");
  }
}
