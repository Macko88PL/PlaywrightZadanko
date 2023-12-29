import { Page, expect } from '@playwright/test';

export class DressesPage{
    constructor(protected page: Page){}

    selectList = this.page.locator('.icon-th-list')
    dressAddToCart = this.page.locator('.ajax_block_product:nth-child(1) .button:nth-child(1) > span');
    proceedToCheckoutBtn = this.page.locator('//span[contains(.,\'Proceed to checkout\')]');

    async selectDress(){
        await this.selectList.click();
        await this.dressAddToCart.click();
    }

    async proceedToCheckout(){
        await this.proceedToCheckoutBtn.click();
    }
}