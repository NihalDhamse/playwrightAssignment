// const { test } = require('@playwright/test');
// const SearchPage = require('../pages/SearchPage');

// test('Google Search Test', async ({ page }) => {
//   const s = new SearchPage(page);
//   await s.open();
//   await s.search("Playwright Automation");
// });

const { test } = require('@playwright/test');
const SearchPage = require('../pages/SearchPage');

test('Search Test - DuckDuckGo', async ({ page }) => {
  const search = new SearchPage(page);
  await search.open();
  await search.search("Playwright Automation Testing");
});
