import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });
  const page = await browser.newPage();
  //   page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  //   await page
  //     .locator("#filesToUpload")
  //     .setInputFiles([
  //       "C:/Users/Raghu/Downloads/Points to take care of.txt",
  //       "C:/Users/Raghu/Downloads/Playwright notes.txt",
  //       "C:/Users/Raghu/Downloads/locatortext.ts",
  //     ]);
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php"); // Upload single file
  await page.locator("#filesToUpload").setInputFiles([
    {
      name: "resume.txt",
      mimeType: "text/plain",
      buffer: Buffer.from("Naveen resume for test automation"),
    },
    {
      name: "drawio.png",
      mimeType: "image/png",
      buffer: Buffer.from("Naveen resume for test automation"),
    },
  ]);
})();
