import { Page, expect } from '@playwright/test';

export class HomePage{
    constructor(protected page: Page){}

    logoPage = this.page.locator('.logo')
    signInBtn = this.page.locator('.login')

    async open(){
        await this.page.goto("");
    }

    async checkVisibilityLogo(){
        await expect(this.logoPage).toBeVisible
    }

    async signButtonClick(){
        await this.signInBtn.click();
    }

}