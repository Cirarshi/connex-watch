import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./",
  timeout: 60000,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    baseURL: "http://localhost:3000",
  },
});
