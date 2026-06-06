import { test, expect } from "@playwright/test";

test("orange test", async ({ page }) => {
  await page.goto("https://orangehrm.com/contact-sales");
  await page.getByRole("textbox", { name: "Full Name" }).click();
  await page.getByRole("textbox", { name: "Full Name" }).fill("Rangarajan");
  await page.getByRole("textbox", { name: "Full Name" }).press("Tab");
  await page.getByRole("textbox", { name: "Email" }).click();
  await page.getByRole("textbox", { name: "Email" }).fill("raghu@gmail.com");
  await page.getByRole("textbox", { name: "Email" }).press("Tab");
  await page.getByRole("textbox", { name: "Phone Number" }).fill("7977604708");
  await page.getByRole("textbox", { name: "Phone Number" }).press("Tab");
  await page.getByLabel("Country").selectOption("India");
  await page.getByRole("textbox", { name: "Company Name" }).click();
  await page.getByRole("textbox", { name: "Company Name" }).fill("Tcs");
  await page.getByRole("textbox", { name: "Job title" }).click();
  await page.getByRole("textbox", { name: "Job title" }).fill("IT analyst ");
  await page
    .locator("section")
    .filter({ hasText: "Talk to Our Experts to" })
    .click();
});
