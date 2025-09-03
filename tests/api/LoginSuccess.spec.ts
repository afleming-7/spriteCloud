import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE: string = "https://reqres.in/api";

test("@API Perform a successful login", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.post(`${API_BASE}/login`, {
    data: { email: "eve.holt@reqres.in", password: "cityslicka" },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeDefined();

  await context.dispose();
});
