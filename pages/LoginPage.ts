import { expect, Page, Locator } from "@playwright/test";

export class LoginPage {
  page: Page;
  usernameField: Locator;
  passwordField: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('[data-test="username"]');
    this.passwordField = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async assertLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(
      "Username and password do not match"
    );
  }
}
