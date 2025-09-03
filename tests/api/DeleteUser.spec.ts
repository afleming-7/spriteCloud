import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE: string = "https://reqres.in/api";

test("@API Perform a deletion", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.delete(`${API_BASE}/users/2`);

  expect(response.status()).toBe(204);

  await context.dispose();
});
