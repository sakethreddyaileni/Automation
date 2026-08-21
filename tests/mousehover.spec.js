const {test, expect} = require("@playwright/test")
test("mousehover", async function({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.getByPlaceholder("Enter Email").type("admin@email.com");
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Enter Password").type("admin@123");
    await page.waitForTimeout(2000)
    await page.locator("//button[@class='submit-btn']").click()
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='Manage']").hover()
    await page.locator("//a[contains(@href, 'category')]").click()



})