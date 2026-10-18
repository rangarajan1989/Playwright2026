import { test, expect } from "@playwright/test";

test("intercept and mock a real API request", async ({ page }) => {
  // Intercept requests to this API endpoint
  await page.route("**/posts/1", async (route) => {
    console.log("Intercepted:", route.request().url());

    // Replace the real API response with our own
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        id: 1,
        title: "My intercepted title",
        body: "This response came from Playwright",
        userId: 1,
      }),
    });
  });

  // Open the API's origin so fetch uses the same origin
  await page.goto("https://jsonplaceholder.typicode.com/");

  // Make a real browser fetch; Playwright intercepts it
  const result = await page.evaluate(async () => {
    const response = await fetch("/posts/1");
    return response.json();
  });

  console.log("Response received by browser:", result);

  expect(result.title).toBe("My intercepted title");
});
