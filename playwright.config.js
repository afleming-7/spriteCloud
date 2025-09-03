// playwright.config.js
// Central config for both UI and API tests
import { defineConfig } from "@playwright/test";

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
        browserName: "chromium",
        baseURL: "https://www.saucedemo.com",
        headless: true,
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "on", //off,on
      },
    },
    {
      name: "firefox",
      use: {
        browserName: "firefox",
        baseURL: "https://www.saucedemo.com",
        headless: true,
        screenshot: "only-on-failure",
        trace: "on", //off,on
      },
    },
  ],
});
