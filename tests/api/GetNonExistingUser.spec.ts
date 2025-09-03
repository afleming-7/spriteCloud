import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE: string = "https://reqres.in/api";

test("@API Negative: get non-existing user", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.get(`${API_BASE}/users/23`);

  expect([404, 401]).toContain(response.status());

  await context.dispose();
});
