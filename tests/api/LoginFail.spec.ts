import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE: string = "https://reqres.in/api";

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
