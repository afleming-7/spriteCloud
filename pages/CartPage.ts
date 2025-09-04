import { expect, Page, Locator } from "@playwright/test";

export class CartPage {
  page: Page;
  checkoutButton: Locator;
  firstNameField: Locator;
  lastNameField: Locator;
  postalCodeField: Locator;
  continueButton: Locator;
  finishButton: Locator;
  totalPrice: Locator;
  checkoutSuccessMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameField = page.locator('[data-test="firstName"]');
    this.lastNameField = page.locator('[data-test="lastName"]');
    this.postalCodeField = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.totalPrice = page.locator(".summary_total_label");
    this.checkoutSuccessMessage = page.locator(".complete-header");
  }

  async checkout(firstName: string, lastName: string, postalCode: string) {
    await this.checkoutButton.click();
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
    await this.continueButton.click();
  }

  async completePurchase() {
    await this.finishButton.click();
  }

  async assertItemInCart(productName: string) {
    const item = this.page.locator(
      `.inventory_item_name:has-text("${productName}")`
    );
    await expect(item).toBeVisible();
  }

  async assertTotalPrice(expectedPrice: number) {
    await expect(this.totalPrice).toHaveText(
      `Total: $${expectedPrice.toFixed(2)}`
    );
  }

  async assertCheckoutSuccessful() {
    await expect(this.checkoutSuccessMessage).toHaveText(
      "Thank you for your order!"
    );
  }
}
