const BasePage = require('./BasePage');
class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartLink = '.shopping_cart_link';
    this.productItems = '.inventory_item';
  }
  async countProducts() {
    return (await this.page.$$(this.productItems)).length;
  }
}
module.exports = ProductsPage;
