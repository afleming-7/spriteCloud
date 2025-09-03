import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("@API Perform an update", async () => {
  const context = await createApiContext();
  const response = await context.put(`${API_BASE}/users/2`, {
    data: { name: "Gandolf", job: "White Wizard" },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.name).toBe("Gandolf");
  expect(body.job).toBe("White Wizard");
  expect(body.updatedAt).toBeDefined();

  await context.dispose();
});
