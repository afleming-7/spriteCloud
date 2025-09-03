import { test, expect } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE = "https://reqres.in/api";

test("Retrieve a list of users", async () => {
  const context = await createApiContext();
  const response = await context.get(`${API_BASE}/users?page=2`);

  console.log("Status:", response.status());
  const body = await response.json();
  console.log("Body:", body);

  await context.dispose();

  expect(response.status()).toBe(200);
  expect(Array.isArray(body.data)).toBeTruthy();
});
