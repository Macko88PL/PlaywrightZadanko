import { Page, expect } from '@playwright/test';

export class MyAccountPage{
    constructor(protected page: Page){}

    dresses = this.page.locator('(//a[contains(text(),\'Dresses\')])[5]');

    async selectDressesTab(){
        await this.dresses.click();
    }
}