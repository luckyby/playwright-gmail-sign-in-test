const {test, expect} = require('@playwright/test')

test('Google search', async({page})=>{
    await page.goto('https://www.google.com/ncr');

    await page.type('[name="q"]', 'yashka selene');
    const submit = await page.$$('[name="btnK"][type="submit"]')
    await submit[1].click()

    await page.click('[id="search"] a');

    await expect(page).toHaveTitle('GitHub - yashaka/selene: User-oriented Web UI browser tests in Python')
})