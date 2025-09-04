import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext, API_BASE } from "../../utils/APIClient.js";

test("@API Perform an update", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.put(`${API_BASE}/users/2`, {
    data: { name: "Gandolf", job: "White Wizard" },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.name).toBe("Gandolf");
  expect(body.job).toBe("White Wizard");
  expect(body.updatedAt).toBeDefined();

  await context.dispose();
});
