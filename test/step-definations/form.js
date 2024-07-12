import { Given, When, Then } from "@wdio/cucumber-framework";
import {$, $$} from "@wdio/globals";
import { assert } from "chai";

Given(/^Open the login page$/, async()=>{
    await browser.url(`https://the-internet.herokuapp.com/login`);
});

Then(/^Login page is opened$/, async()=>{
    assert.strictEqual(await browser.getUrl(), `https://the-internet.herokuapp.com/login`, "Page is not opened");
});

When(/^user put username$/, async()=>{
    await $(`[name="username"]`).setValue("tomsmith");
});

When(/^user put password$/, async()=>{
    await $(`[name="password"]`).setValue("SuperSecretPassword!");
});

When(/^click on login button$/, async()=>{
    await $(`[type="submit"]`).click();
});

Then(/^user is loggedin$/, async()=>{
    assert.isTrue(await $(`[class="subheader"]`).isExisting());
});

Then(/^user should view the (.+) button$/, async(button_name)=>{
    assert.isTrue(await $(`//a/i[contains(text(), "${button_name}")]`).isExisting());
});