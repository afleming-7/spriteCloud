import { expect } from "@playwright/test";

export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator(".inventory_item");
    this.sortDropdown = page.locator('[data-test="product_sort_container"]');
    this.addToCartButtons = page.locator('button:has-text("Add to cart")');
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async addItemToCart(productName) {
    //const itemNames = await this.inventoryItems.locator(".inventory_item_name").allTextContents();
    const count = await this.inventoryItems.count();
    for (let i = 0; i < count; ++i) {
      if (
        (await this.inventoryItems
          .nth(i)
          .locator(".inventory_item_name")
          .textContent()) === productName
      ) {
        //add to cart
        await this.addToCartButtons.nth(i).click();
        break;
      }
    }
  }

  async sortByNameDescending() {
    await this.sortDropdown.selectOption("za");
  }

  async assertSortedDescending() {
    const itemNames = await this.inventoryItems
      .locator(".inventory_item_name")
      .allTextContents();

    const sorted = [...itemNames].sort().reverse();
    expect(itemNames).toEqual(sorted);
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
