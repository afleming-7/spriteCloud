import { test } from "@playwright/test";
import { PageObjectModel } from "../../pages/PageObjectModel";
import rawData from "../../test-data/SortingTestData.json";

const testData = rawData as SortingTestData;

test("@UI Sort items by name Z-A and validate sorting", async ({ page }) => {
  const pageObjectModel = new PageObjectModel(page);
  const loginPage = pageObjectModel.getLoginPage();
  const inventoryPage = pageObjectModel.getInventoryPage();

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  // Step 2: Sort by name Z-A
  await inventoryPage.sortByNameDescending();

  // Step 3: Validate the sorting is correct
  await inventoryPage.assertSortedDescending();
});
