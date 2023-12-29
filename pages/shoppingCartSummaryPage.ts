import { Page, expect } from '@playwright/test';

export class ShoppingCartSummaryPage{
    constructor(protected page: Page){}

    proceedToCheckoutBtn = this.page.locator('.standard-checkout > span');

    async proceedToCheckout(){
        await this.proceedToCheckoutBtn.click();
    }

}