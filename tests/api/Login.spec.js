import { test, expect, request as pwRequest } from "@playwright/test";

test("Successful login", async () => {
  // Create a fresh request context with the required API key
  const context = await pwRequest.newContext({
    extraHTTPHeaders: {
      "x-api-key": "reqres-free-v1",
    },
  });

  const response = await context.post("https://reqres.in/api/login", {
    data: { email: "eve.holt@reqres.in", password: "cityslicka" },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeDefined();

  await context.dispose();
});
