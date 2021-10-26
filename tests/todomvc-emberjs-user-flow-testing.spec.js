const { test, expect } = require('@playwright/test');

test('todomvc.ember.js testing', async ({page})=>{
    await page.goto('https://todomvc.com/examples/emberjs/');

    const new_todo = await page.locator('[id="new-todo"]');

    await new_todo.type('a');
    await new_todo.press('Enter');
    await new_todo.type('b');
    await new_todo.press('Enter');
    await new_todo.type('c');
    await new_todo.press('Enter');


    const todo_1 = await page.locator('#todo-list li:nth-child(1)')
    const todo_2 = await page.locator('#todo-list li:nth-child(2)')
    const todo_3 = await page.locator('#todo-list li:nth-child(3)')

    await expect(todo_1).toHaveText('a')
    await expect(todo_2).toHaveText('b')
    await expect(todo_3).toHaveText('c')

    const todos = page.locator('#main #todo-list li');

    await expect(todos).toHaveCount(3);

    // const toggle_1 = await page.locator('#todo-list li:nth-child(1) .toggle')
    // await toggle_1.click()
    await page.click('#main #todo-list li:nth-child(1) .toggle' );

    await expect(todo_1).toHaveText('a')
    await expect(todo_2).toHaveText('b')
    await expect(todo_3).toHaveText('c')

    await expect(todos).toHaveText(['a', 'b', 'c'])
    await expect(todos).toHaveCount(3);

    await page.hover('#main #todo-list li:nth-child(2)').then(()=>{
        page.click('#main #todo-list li:nth-child(2) .destroy')
    });

    await expect(todo_1).toHaveText('a')
    await expect(todo_2).toHaveText('c')
    await expect(todos).toHaveCount(2);
    await expect(todos).toHaveText(['a', 'c'])

    await page.click('[id="clear-completed"]')

    await expect(todos).toHaveCount(1);
})




