import { test, expect } from "@playwright/test";

test("intercept and abort an API request", async ({ page }) => {
  // Intercept requests to this API endpoint
  await page.route("**/posts/1", async (route) => {
    console.log("Intercepted:", route.request().url());

    // Stop the request
    await route.abort();
  });

  // Open the API's origin
  await page.goto("https://jsonplaceholder.typicode.com/");

  // Make a browser fetch request and handle the network error
  const result = await page.evaluate(async () => {
    try {
      const response = await fetch("/posts/1");
      return `Unexpected success: ${response.status}`;
    } catch (error) {
      return `Request failed: ${String(error)}`;
    }
  });

  console.log("Browser result:", result);

  // Verify that the request failed
  expect(result).toContain("Request failed:");
});
