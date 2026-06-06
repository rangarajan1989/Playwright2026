import { Browser, chromium, expect, Locator } from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  await page.goto("https://orangehrm.com/contact-sales");

  let country = page.locator("select#Form_getForm_Country");
  await country.selectOption({ label: "American Samoa" });
  await page.waitForTimeout(2000);
  //await country.selectOption("Angola");
  await selectDropDownByLabel(country, "Australia");
})();

async function selectDropDownByValue(
  element: Locator,
  value: string,
): Promise<void> {
  await element.selectOption(value);
  await expect(element).toHaveValue(value);
}

async function selectDropDownByLabel(
  element: Locator,
  label: string,
): Promise<void> {
  await element.selectOption({ label: label });
  let labelValue = await element.inputValue();
  await expect(element).toHaveValue(labelValue);
}
