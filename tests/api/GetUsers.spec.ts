import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";
import { createApiContext } from "../../utils/APIClient.js";

const API_BASE: string = "https://reqres.in/api";

test("@API Retrieve a list of users", async () => {
  const context: APIRequestContext = await createApiContext();
  const response: APIResponse = await context.get(`${API_BASE}/users?page=2`);

  console.log("Status:", response.status());
  const body = await response.json();
  console.log("Body:", body);

  await context.dispose();

  expect(response.status()).toBe(200);
  expect(Array.isArray(body.data)).toBeTruthy();
});
