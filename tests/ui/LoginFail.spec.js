import { test } from "@playwright/test";
const { PageObjectModel } = require("../../pages/PageObjectModel");
const testData = JSON.parse(
  JSON.stringify(require("../../test-data/LoginFailTestData.json"))
);

test("@UI Login fails with invalid credentials", async ({ page }) => {
  const pageObjectModel = new PageObjectModel(page);
  const loginPage = pageObjectModel.getLoginPage();

  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);
  await loginPage.assertLoginFailed();
});
