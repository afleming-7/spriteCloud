import { test, expect } from "@playwright/test";

test("Login fails without password", async ({ request }) => {
  const response = await request.post("https://reqres.in/api/login", {
    data: { email: "eve.holt@reqres.in" },
  });

  expect(response.status()).toBe(400);
  const body = await response.json();
  expect(body.error).toBeDefined();
});

test("Get non-existing user fails", async ({ request }) => {
  const response = await request.get("https://reqres.in/api/users/23");
  expect(response.status()).toBe(404);
});
