import {
  Browser,
  chromium,
  expect,
  FrameLocator,
  Locator,
} from "@playwright/test";

(async () => {
  let browser = await chromium.launch({ headless: false, channel: "chrome" });
  let page = await browser.newPage();
  //   await page.goto(
  //     "https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/",
  //   );
  //   await page.getByTitle("Vehicle-Registration-Forms-and-Examples").click();
  //   let frameLocator: FrameLocator = page.frameLocator(
  //     "iframe#frame-one748593425",
  //   );
  //   frameLocator
  //     .locator("input.text_field#RESULT_TextField-1")
  //     .fill("Automation Testing");

  await page.goto("https://www.londonfreelance.org/courses/frames/index.html");
  let frameLocator: FrameLocator = page.frameLocator("[name='main']");
  let header = await frameLocator.locator("//h2").innerText();
  console.log(header);

  let frameLocator1: FrameLocator = page.frameLocator("[name='content']");
  let header1 = await frameLocator1.locator("//h1").innerText();
  console.log(header1);

  let navigationFrame = page.frameLocator("[name='navbar']");
  let navHeader = await navigationFrame.locator("//h3").innerText();
  console.log(navHeader);
})();
