const {test,expect}=require('@playwright/test')
test ("Verify login", async function ({page}) {
   await page.goto("https://practicetestautomation.com/practice-test-login/")
   await page.locator("input[name='username']").type("student",{delay:200})    //here delay is used to type each letter after 2seconds
   await page.locator("input[name='password']").type("Password123",{delay:200})
   await page.locator("//button[@class='btn']").click()
   await page.waitForTimeout(5000)
   await expect(page).toHaveURL(/logged-in-successfully/);
   await page.getByText("Log out").click()
   await page.waitForTimeout(200)
   await expect(page).toHaveURL(/practice-test-login/);


    
})