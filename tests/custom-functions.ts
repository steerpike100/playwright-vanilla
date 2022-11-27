import {test,expect} from '@playwright/test'

import {loadHomePage, assertTitle} from '../helpers'

test("Custom helpers", async({page}) =>{
    await loadHomePage(page)
    await assertTitle(page)
})