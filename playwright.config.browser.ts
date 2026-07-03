/// <reference types="node" />
import { defineConfig } from "@playwright/test";

// 1. Playwright natively loads the .env file automatically out of the box!
// No need to import or configure 'dotenv' here.

const caps = {
  browser: "chrome",
  browser_version: "latest",
  os: "Windows",
  os_version: "11",
  name: "Playwright POM Framework Tests",
  build: "Build-1.0",
  "browserstack.username": process.env.BROWSERSTACK_USERNAME || "",
  "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY || "",
};

export default defineConfig({
  testDir: "./tests",
  reporter: [["html", { open: "never" }]],
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify(caps))}`,
    },
  },
});
