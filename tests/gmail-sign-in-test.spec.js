const {test, expect} = require('@playwright/test')
const {user_email, user_password} = require('../config.user.js')

test('GMail signIn', async({page})=>{
    await page.goto('https://www.google.com/intl/ru/gmail/about/');
    await page.click('[data-action="sign in"]');

    await page.type('[type="email"]', user_email);
    await page.click('[id="identifierNext"] button');

    const elem2 = await page.waitForSelector('[type="password"]');
    await elem2.type(user_password);
    await page.click('[id="passwordNext"] [type="button"]');

    const wright_button = await page.locator('[id=":32"]')
    await expect(wright_button).toHaveText('Написать');
})