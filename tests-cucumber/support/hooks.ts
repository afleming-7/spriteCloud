import { Before, After, IWorld } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import { PageObjectModel } from "../../pages/PageObjectModel";

// Extend the Cucumber World to include Playwright objects
declare module "@cucumber/cucumber" {
  interface World {
    page: Page;
    context: BrowserContext;
    browser: Browser;
    pom: PageObjectModel;
  }
}

Before({ tags: "@UI" }, async function () {
  // Launch a fresh browser
  this.browser = await chromium.launch({ headless: true });

  // Create a new isolated context
  this.context = await this.browser.newContext();

  // Open a new page
  this.page = await this.context.newPage();

  // Initialize Page Object Model for this scenario
  this.pom = new PageObjectModel(this.page);
});

After(async function () {
  // Close context and browser
  await this.context.close();
  await this.browser.close();
});
