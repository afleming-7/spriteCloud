// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  retries: 1,
  reporter: [["line"], ["allure-playwright"]],

  projects: [
    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"], // Built-in device config
        baseURL: "https://www.saucedemo.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "on",
      },
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        baseURL: "https://www.saucedemo.com",
        headless: true,
        screenshot: "only-on-failure",
        trace: "on",
      },
    },
  ],
});
