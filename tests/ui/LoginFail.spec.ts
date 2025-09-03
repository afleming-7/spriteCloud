import { test } from "@playwright/test";
import { PageObjectModel } from "../../pages/PageObjectModel";
import rawData from "../../test-data/LoginFailTestData.json";

const testData = rawData as LoginFailTestData;

test("@UI Login fails with invalid credentials", async ({ page }) => {
  const pageObjectModel = new PageObjectModel(page);
  const loginPage = pageObjectModel.getLoginPage();

  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);
  await loginPage.assertLoginFailed();
});
