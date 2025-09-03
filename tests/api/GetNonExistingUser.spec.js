import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("Negative: get non-existing user", async () => {
  const context = await createApiContext();
  const response = await context.get(`${API_BASE}/users/23`);

  expect([404, 401]).toContain(response.status());

  await context.dispose();
});
