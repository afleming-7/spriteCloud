import { test, expect } from "@playwright/test";

test("Delayed request and measure response time", async ({ request }) => {
  const start = Date.now();

  const response = await request.get("https://reqres.in/api/users?delay=3");

  const duration = (Date.now() - start) / 1000; // seconds
  console.log(`Response took ${duration} seconds`);

  expect(response.status()).toBe(200);
  expect(duration).toBeLessThanOrEqual(3.5); // allow small overhead
});
