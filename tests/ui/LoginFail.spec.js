import { test } from "@playwright/test";
const { POManager } = require("../../pages/POManager");
const testData = JSON.parse(
  JSON.stringify(require("../../test-data/LoginFailTestData.json"))
);

test("@UI Login fails with invalid credentials", async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLoginPage();

  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);
  await loginPage.assertLoginFailed();
});
