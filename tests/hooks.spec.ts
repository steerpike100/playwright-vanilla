import {test,expect} from '@playwright/test'


test.describe.only("Hooks", ()=>{

    test.beforeEach(async ({page}) =>{
        await page.goto("https://example.com")
    })

    test("Screenshot whole page", async({page}) =>{
        await page.goto("https://example.com")
        await page.screenshot({path: "screenshot.png", fullPage:true})

    })

    test("Screenshot single element", async({page}) =>{
        const element = await page.$('h1')
        await element.screenshot({path:"single_element_screenshot.png"})
        await page.screenshot({path: "screenshot.png"})

    })

})
