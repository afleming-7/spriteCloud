import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("Perform a successful login", async () => {
  const context = await createApiContext();
  const response = await context.post(`${API_BASE}/login`, {
    data: { email: "eve.holt@reqres.in", password: "cityslicka" },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.token).toBeDefined();

  await context.dispose();
});
