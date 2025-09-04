import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { PageObjectModel } from "../../pages/PageObjectModel";
import testData from "../../test-data/CheckoutTestData.json";
import { page } from "../support/hooks";

let pom: PageObjectModel;

Given("I am logged in with valid credentials", async () => {
  pom = new PageObjectModel(page);
  const loginPage = pom.getLoginPage();
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);
});

When("I add two products to the cart", async () => {
  const inventoryPage = pom.getInventoryPage();
  await inventoryPage.addItemToCart(testData.productName1);
  await inventoryPage.addItemToCart(testData.productName2);
  await inventoryPage.goToCart();
});

When("I proceed to checkout with my details", async () => {
  const cartPage = pom.getCartPage();
  await cartPage.checkout(
    testData.firstName,
    testData.lastName,
    testData.zipCode
  );
});

Then("I should see the correct total price", async () => {
  const cartPage = pom.getCartPage();
  await cartPage.assertTotalPrice(testData.price);
});

Then("I should see a successful checkout message", async () => {
  const cartPage = pom.getCartPage();
  await cartPage.completePurchase();
  await cartPage.assertCheckoutSuccessful();
});
