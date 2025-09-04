import { Before, After } from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;
export let page: Page;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await context.close();
  await browser.close();
});
