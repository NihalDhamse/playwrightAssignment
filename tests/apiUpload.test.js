const { test, expect } = require("@playwright/test");
const fs = require("fs");

test("Upload File using ConvertAPI", async ({ request }) => {
  fs.writeFileSync("sample.txt","Hello I'm Nihal Dhamse");
  const response = await request.fetch("https://v2.convertapi.com/upload", {
    method:"POST",
    multipart:{ file:{ name:"sample.txt", mimeType:"text/plain", buffer:fs.readFileSync("sample.txt") }}
  });
  expect(response.status()).toBe(200);
});
