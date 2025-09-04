import { request as pwRequest } from "@playwright/test";

export const API_BASE = "https://reqres.in/api";

const API_KEY: string = "reqres-free-v1";

export async function createApiContext() {
  return await pwRequest.newContext({
    extraHTTPHeaders: {
      "x-api-key": API_KEY,
      "Content-Type": "application/json",
    },
  });
}
