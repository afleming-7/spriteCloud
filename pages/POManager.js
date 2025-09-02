const { LoginPage } = require("./LoginPage");
const { InventoryPage } = require("./InventoryPage");
const { CartPage } = require("./CartPage");

class POManager {
  constructor(page) {
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
module.exports = { POManager };
