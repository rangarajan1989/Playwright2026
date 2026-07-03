import { expect } from "@playwright/test";
import { test } from "../fixtures/loginFixture";

// 1. Destructure the fixtures inside curly braces { }
test("Login to naveen", async ({ loginFixture, page }) => {
  // 2. Use a Web-First assertion to check the title
  await page.waitForTimeout(4000);
  await expect(page).toHaveTitle("My Account");

  // Or if you want to use your original style:
  // const title = await page.title();
  // expect(title).toBe("My Account");
});
