import { test } from "@playwright/test";
import { PageObjectModel } from "../../pages/PageObjectModel";
import rawData from "../../test-data/CheckoutTestData.json";

const testData = rawData as CheckoutTestData;

test("@UI Full checkout flow with two items and price validation", async ({
  page,
}) => {
  const pageObjectModel = new PageObjectModel(page);
  const loginPage = pageObjectModel.getLoginPage();
  const inventoryPage = pageObjectModel.getInventoryPage();
  const cartPage = pageObjectModel.getCartPage();

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  // Step 2: Add two items to cart
  await inventoryPage.addItemToCart(testData.productName1);
  await inventoryPage.addItemToCart(testData.productName2);

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

  //Step 7: Validate Checkout is Successful
  await cartPage.assertCheckoutSuccessful();
});
