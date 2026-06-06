import { Browser, chromium, expect, Page } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/register",
  );
  await page.getByRole("textbox", { name: "* First Name" }).fill("Raghu");
  await page.getByRole("textbox", { name: "Last Name" }).fill("Ragavan");
  await page
    .getByRole("textbox", { name: "E-Mail" })
    .fill("ragavan1989@gmail.com");
  await page.getByRole("textbox", { name: "* Telephone" }).fill("7977604708");
  await page
    .getByRole("textbox", { name: "* Password", exact: true })
    .fill("Light@1234");
  await page
    .getByRole("textbox", { name: "* Password Confirm" })
    .fill("Light@1234");
  await page.getByRole("checkbox").click();
  await page.getByRole("button", { name: "Continue" }).click();
  try {
    let string = await page
      .getByText("Your Account Has Been Created!")
      .textContent();
    expect(string).toBe("Your Account Has Been Created!");
    console.log("login successful");
  } catch (error) {
    console.log("login failed");
    throw error;
  }
})();
