import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("Negative: login fails without password", async () => {
  const context = await createApiContext();
  const response = await context.post(`${API_BASE}/login`, {
    data: { email: "eve.holt@reqres.in" },
  });

  expect([400, 401]).toContain(response.status());
  const body = await response.json();
  expect(body.error).toBeDefined();

  await context.dispose();
});
