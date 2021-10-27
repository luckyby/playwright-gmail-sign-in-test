const {test, expect} = require('@playwright/test')

test('Google search', async({page})=>{
    await page.goto('https://www.google.com/ncr');

    await page.type('[name="q"]', 'yashka selene');
    const submit = await page.locator('[name="btnK"][type="submit"]')
    // await page.click('[class="FPdoLc lJ9FBc"] [aria-label="Google Search"][type="submit"]')
    await submit[1].click()

    await page.click('[id="search"] a');
})