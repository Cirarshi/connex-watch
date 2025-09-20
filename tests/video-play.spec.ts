import { test, expect } from "@playwright/test";

test("user can login and play a video", async ({ page }) => {
  await page.goto("http://localhost:3000/login");

  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="password"]', "password");
  await page.click('button[type="submit"]');

  await page.click("text=Featured Video");
  const video = page.locator("video");
  await expect(video).toHaveAttribute("src", /awscloudfront/);
});
