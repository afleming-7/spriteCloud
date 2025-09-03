import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("@API Delayed request (max 3s)", async () => {
  const context = await createApiContext();
  const start = Date.now();

  const response = await context.get(`${API_BASE}/users?delay=3`);

  const elapsed = Date.now() - start;
  expect(response.status()).toBe(200);
  expect(elapsed).toBeGreaterThanOrEqual(3000);

  await context.dispose();
});
