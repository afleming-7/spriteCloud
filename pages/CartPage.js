import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
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

  async checkout(firstName, lastName, postalCode) {
    await this.checkoutButton.click();
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode);
    await this.continueButton.click();
  }

  async completePurchase() {
    await this.finishButton.click();
  }

  async assertTotalPrice(expectedPrice) {
    const text = await this.totalPrice.textContent();
    const actualPrice = parseFloat(text.replace("Total: $", ""));
    expect(actualPrice).toBeCloseTo(expectedPrice, 2);
  }

  async assertCheckoutSuccessful() {
    await expect(this.checkoutSuccessMessage).toBeVisible();
    await expect(this.checkoutSuccessMessage).toContainText(
      "Thank you for your order!"
    );
  }
}
