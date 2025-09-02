import { test, expect } from "@playwright/test";

test("Retrieve list of users", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users?page=2");
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.data).toBeDefined();
  expect(body.data.length).toBeGreaterThan(0);
  expect(body.page).toBe(2);
});
