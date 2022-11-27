# Runbook

Playwright vanilla project for training

## Installation with test runner and assertion library

```bash
npm install @playwright/test
```

## Test formats
Single test
```bash
 test("Simple basic test @myTag", async ({page}) => {//test here}
```
Only test test
```bash
 test.only("Simple basic test @myTag", async ({page}) => {//test here}
```
Single test
```bash
 test("Simple basic test @myTag", async ({page}) => {//test here}
```
Skip test
```bash
 test.skip("Simple basic test @myTag", async ({page}) => {//test here}
 ````

Grouping tests test
```bash
 test.describe("An example test suite", () => {
    test("Simple basic test @myTag", async ({page}) => {}
    test("Simple basic test @myTag", async ({page}) => {}
    
```


## Reporters

Line
```bash
npx playwright test --config=playwright.config.ts --project=Chromium --reporter=line 
```
List
```bash
npx playwright test --config=playwright.config.ts --project=Chromium --reporter=list
```
junit 
```bash
npx playwright test --config=playwright.config.ts --project=Chromium --reporter=junit
```
html 
```bash
npx playwright test --config=playwright.config.ts --project=Chromium --reporter=html 
```

## Screenshots
Whole page
```javascript
await page.screenshot({path: "screenshot.png", fullPage:true})
```
single element
```javascript
await element.screenshot({path:"single_element_screenshot.png"})
```

## Before & After Hooks
Before Each
```javascript 
test.beforeEach(async ({page}) =>{
   await page.goto("https://example.com")
})
```
## Parallel running 



## Custom functions


## License

[MIT](https://choosealicense.com/licenses/mit/)