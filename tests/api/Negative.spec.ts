import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext, API_BASE } from "../../utils/APIClient.js";

test.describe.configure({ mode: "parallel" });

test("@API Negative: get non-existing user", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.get(`${API_BASE}/users/23`);

  expect([404, 401]).toContain(response.status());

  await context.dispose();
});

test("@API Negative: login fails without password", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.post(`${API_BASE}/login`, {
    data: { email: "eve.holt@reqres.in" },
  });

  expect([400, 401]).toContain(response.status());
  const body = await response.json();
  expect(body.error).toBeDefined();

  await context.dispose();
});
