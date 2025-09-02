import { test } from "@playwright/test";
const { POManager } = require("../../pages/POManager");
const testData = JSON.parse(
  JSON.stringify(require("../../test-data/SortingTestData.json"))
);

test("Sort items by name Z-A and validate sorting", async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();
  const inventoryPage = poManager.getInventoryPage();

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);

  // Step 2: Sort by name Z-A
  await inventoryPage.sortByNameDescending();

  // Step 3: Validate the sorting is correct
  await inventoryPage.assertSortedDescending();
});
