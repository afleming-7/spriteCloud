import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext, API_BASE } from "../../utils/APIClient.js";

test("@API Perform a deletion", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.delete(`${API_BASE}/users/2`);

  expect(response.status()).toBe(204);

  await context.dispose();
});
