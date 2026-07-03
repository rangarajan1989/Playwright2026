import { test as base, Page } from "@playwright/test";

type MyFixture = {
  loginFixture: void;
};

export const test = base.extend<MyFixture>({
  loginFixture: async ({ page }, use) => {
    console.log(`Logging in`);
    await page.goto(
      "https://naveenautomationlabs.com/opencart/index.php?route=account/login",
    );
    await page
      .getByRole("textbox", { name: "E-Mail Address" })
      .fill("raghu@gmail.com");
    await page.getByRole("textbox", { name: "Password" }).fill("Light@1234");
    await page.getByRole("button", { name: "Login" }).click();
    await use();
  },
});

export { expect } from "@playwright/test";
