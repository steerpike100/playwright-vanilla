import {expect, test} from '@playwright/test'

//run tag with npx playwright test --grep @myTag
//run all except tag with npx playwright test --grep-invert @myTag

test.describe("An example test suite", () => {
    test("Simple basic test @myTag", async ({page}) => {
        await page.goto("https://example.com")
        const pageTitle = await page.locator('h1')
        await expect(pageTitle).toContainText('Example Domain')
    })

    test("Clicking on Elements, @myOtherTag", async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click('#signin_button')
        await page.click('text=Sign in')

        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText('Login and/or password are wrong.')
    })


})

