// const BasePage=require('./BasePage');
// class SearchPage extends BasePage{
//   constructor(page){super(page);this.searchInput='input[name="q"]';}
//   async open(){await this.page.goto('https://google.com');}
//   async search(q){await this.page.fill(this.searchInput,q);await this.page.keyboard.press('Enter');}
// }
// module.exports=SearchPage;

const BasePage = require('./BasePage');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchInput = 'input[name="q"]';
  }

  async open() {
    await this.page.goto('https://duckduckgo.com');
  }

  async search(keyword) {
    await this.page.fill(this.searchInput, keyword);
    await this.page.keyboard.press('Enter');
  }
}

module.exports = SearchPage;
