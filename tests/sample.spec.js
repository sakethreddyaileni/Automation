const {test,expect}=require("@playwright/test")
test ("My first function", async function({page}){
    expect(100).toBe(100)

})

test.skip ("My second function", async function({page}){
    expect("saketh reddy").toContain("saketh")

})

test ("My third function", async function({page}){
    expect("saketh reddy").toContain("saketh123")

})