// playwright.config.js
// Central config for both UI and API tests
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  retries: 1,
  reporter: [["line"], ["allure-playwright"]],
  use: {
    headless: true,
    baseURL: "https://www.saucedemo.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
