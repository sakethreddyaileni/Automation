const {test,expect} = require("@playwright/test")
test.use({viewport:{width:900,height:500}})
test("verify the invalid credentias scenario", async function({page}) {
      await page.goto("https://practicetestautomation.com/practice-test-login/")
      /*await page.setViewportSize({
        height: 820,
        width:1020,
      })*/
      console.log(await page.viewportSize().height)
      console.log(await page.viewportSize().width)
      
      await page.locator("input[name='username']").type("student",{delay:200})
      await page.locator("input[name='password']").type("Password1123",{delay:200})
      await page.locator("//button[@class='btn']").click()
      await page.waitForTimeout(2000)
      const errorMessage = await page.locator("//div[@class='show']").textContent()
      console.log("error message is " +errorMessage);

      expect(errorMessage.includes("passwordb")).toBeFalsy()  //assertions
      expect(errorMessage=== "Your password is invali!").toBeTruthy()
      

      
   })