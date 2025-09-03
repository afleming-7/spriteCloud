import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("Perform a deletion", async () => {
  const context = await createApiContext();
  const response = await context.delete(`${API_BASE}/users/2`);

  expect(response.status()).toBe(204);

  await context.dispose();
});
