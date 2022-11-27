export async function loadHomePage(page){
    await page.goto("http://zero.webappsecurity.com/index.html")
}

export async function assertTitle(page){
    await page.waitForSelector("h1")
}