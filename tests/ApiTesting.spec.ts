import { test, expect, chromium } from "@playwright/test";
const TOKEN =
  "22a2c4a87d8c9d4466400a6503338f43b5868f2114fca90f356b4c21280d2047";

test.skip("get request", async ({ request }) => {
  const requestBody = await request.get(
    "https://gorest.co.in/public/v2/users",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    },
  );
  expect(requestBody.status()).toBe(200);
  const data = await requestBody.json();
  console.log(data);
});

test.skip("post request", async ({ request }) => {
  const requestData = {
    name: "Raghu R",
    email: `raghu${Date.now()}@gmail.com`,
    gender: "female",
    status: "active",
  };
  const requestBody = await request.post(
    "https://gorest.co.in/public/v2/users",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: requestData,
    },
  );
  expect(requestBody.status()).toBe(201);
  const data = await requestBody.json();
  console.log(data);
});

test.skip("put request", async ({ request }) => {
  const userId = "8522791";
  const requestData = {
    status: "active",
  };
  const requestBody = await request.put(
    `https://gorest.co.in/public/v2/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: requestData,
    },
  );
  expect(requestBody.status()).toBe(200);
  const data = await requestBody.json();
  console.log(data);
});
