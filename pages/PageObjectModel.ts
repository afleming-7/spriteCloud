import { LoginPage } from "./LoginPage";
import { InventoryPage } from "./InventoryPage";
import { CartPage } from "./CartPage";
import { Page } from "@playwright/test";

export class PageObjectModel {
  page: Page;
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
    this.cartPage = new CartPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getInventoryPage() {
    return this.inventoryPage;
  }
}
