import {test,expect} from '@playwright/test'

test("inputs test", async ({page}) =>{
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click('#signin_button')
    await page.type('#user_login', 'some username')
    await page.type('#user_password', 'some password')
    await page.click('text=Sign in')

    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})