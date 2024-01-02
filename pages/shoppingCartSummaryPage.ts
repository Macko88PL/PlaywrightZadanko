import { Page, expect } from '@playwright/test';

export class ShoppingCartSummaryPage{
    constructor(protected page: Page){}

    proceedToCheckoutBtn = this.page.locator('.standard-checkout > span');
    checkSelectProduct = this.page.locator('.cart_description > .product-name > a');

    async proceedToCheckout(){
        await this.proceedToCheckoutBtn.click();
    }

    async checkProduct(){
        await expect(this.checkSelectProduct).toBeVisible();
    }

}