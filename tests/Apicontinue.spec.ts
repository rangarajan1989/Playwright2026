import { test, expect } from "@playwright/test";

test("intercept and continue a real API request", async ({ page }) => {
  // Intercept requests to this API endpoint
  await page.route("**/posts/1", async (route) => {
    console.log("Intercepted:", route.request().url());

    // Send the request to the real API server
    await route.continue();
  });

  // Open the API's origin
  await page.goto("https://jsonplaceholder.typicode.com/");

  // Make a browser fetch request
  const result = await page.evaluate(async () => {
    const response = await fetch("/posts/1");
    return response.json();
  });

  console.log("Real API response:", result);

  // Verify the real API response
  expect(result.id).toBe(1);
  expect(result.title).toBe(
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  );
});
