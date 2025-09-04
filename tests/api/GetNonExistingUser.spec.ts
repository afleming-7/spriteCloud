import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext, API_BASE } from "../../utils/APIClient.js";

test("@API Negative: get non-existing user", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.get(`${API_BASE}/users/23`);

  expect([404, 401]).toContain(response.status());

  await context.dispose();
});
