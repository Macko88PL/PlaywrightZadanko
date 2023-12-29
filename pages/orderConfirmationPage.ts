import { Page, expect } from '@playwright/test';
import { succesMessage } from '../fixtures/succesMessage';

export class OrderConfirmationPage{
    constructor(protected page: Page){}
    
    proceedToCheckoutBtn = this.page.locator('//p/button/span');
    checkBoxAgreeTerms = this.page.locator('#cgv');
    paymentSelect = this.page.locator('.bankwire');
    confirmOrderBtn = this.page.locator('#cart_navigation span');
    orderAndPaymentMessage = this.page.locator('.alert');


    async orderConfirmationAndPayment(){
        await this.proceedToCheckoutBtn.click();
        await this.checkBoxAgreeTerms.click();
        await this.proceedToCheckoutBtn.click();
        await this.paymentSelect.click();
        await this.confirmOrderBtn.click();
    }

    async checkOrderWithPayment(){
        await expect(this.orderAndPaymentMessage).toContainText(succesMessage.succesOrderWithPayment);
    }

}