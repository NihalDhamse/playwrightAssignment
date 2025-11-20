const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const store = require('../utils/dataStore');

test('Login Test - Capture Title', async ({ page }) => {
  const login = new LoginPage(page);
  await login.open();
  await login.login('standard_user','secret_sauce');
  const title = await login.getTitle();
  expect(title).toContain('Products');
  store.save("loginTitle", title);
});
