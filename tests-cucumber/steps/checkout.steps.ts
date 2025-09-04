import { Given, When, Then } from "@cucumber/cucumber";

Given(
  "I am logged in with username {string} and password {string}",
  async function (username, password) {
    const loginPage = this.pom.getLoginPage();
    await loginPage.goto();
    await loginPage.login(username, password);
  }
);

When(
  "I add {string} and {string} to the cart",
  async function (product1, product2) {
    const inventoryPage = this.pom.getInventoryPage();
    await inventoryPage.addItemToCart(product1);
    await inventoryPage.addItemToCart(product2);
    await inventoryPage.goToCart();
  }
);

When(
  "I proceed to checkout with first name {string}, last name {string}, and zip code {string}",
  async function (firstName, lastName, zipCode) {
    this.cartPage = this.pom.getCartPage();
    await this.cartPage.checkout(firstName, lastName, zipCode);
  }
);

Then(
  "I should see the total price {string}",
  { timeout: 10000 },
  async function (expectedPrice: string) {
    const numericPrice = parseFloat(expectedPrice.replace("$", ""));
    await this.cartPage.assertTotalPrice(numericPrice);
  }
);

Then("I should see a successful checkout message", async function () {
  await this.cartPage.completePurchase();
  await this.cartPage.assertCheckoutSuccessful();
});
