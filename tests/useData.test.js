const { test, expect } = require('@playwright/test');
const store=require('../utils/dataStore');

test('Use Saved Data', async()=>{ 
  const m=store.get("message");
  expect(m).toBe("Hello from Test 3");
});
