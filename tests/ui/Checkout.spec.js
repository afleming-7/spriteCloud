import { test } from "@playwright/test";
const { POManager } = require("../../pages/POManager");
const testData = JSON.parse(
  JSON.stringify(require("../../test-data/CheckoutTestData.json"))
);

test("@UI Full checkout flow with two items and price validation", async ({
  page,
}) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const inventoryPage = poManager.getInventoryPage();
  const cartPage = poManager.getCartPage();

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password); // Use known valid credentials

  // Step 2: Add two items to cart
  await inventoryPage.addItemToCart(testData.productName1); // Add first item
  await inventoryPage.addItemToCart(testData.productName2); // Add second item

  // Step 3: Go to cart
  await inventoryPage.goToCart();

  // Step 4: Checkout process
  await cartPage.checkout(
    testData.firstName,
    testData.lastName,
    testData.zipCode
  );

  // Step 5: Validate total price
  await cartPage.assertTotalPrice(testData.price);

  // Step 6: Complete purchase
  await cartPage.completePurchase();
});
