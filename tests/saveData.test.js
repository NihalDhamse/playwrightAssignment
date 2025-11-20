const { test } = require('@playwright/test');
const store=require('../utils/dataStore');

test('Save Data', async()=>{ store.save("message","Hello from Test 3"); });
