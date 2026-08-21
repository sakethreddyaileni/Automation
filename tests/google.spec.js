const {test,expect}=require('@playwright/test')
test("Verify the url" ,async ({page}) => {
    await page.goto("http://google.com")
    const url = await page.url()
    console.log("Url is"+url)
    const title = await page.title()
    console.log("Title is"+title)
    await expect(page).toHaveTitle("Google")
    
    
}
)
