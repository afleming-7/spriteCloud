import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE: string = "https://reqres.in/api";

test("@API Delayed request (max 3s)", async () => {
  const context: APIRequestContext = await createApiContext();
  const start: number = Date.now();

  const response: APIResponse = await context.get(`${API_BASE}/users?delay=3`);

  const elapsed: number = Date.now() - start;
  expect(response.status()).toBe(200);
  expect(elapsed).toBeGreaterThanOrEqual(3000);

  await context.dispose();
});
