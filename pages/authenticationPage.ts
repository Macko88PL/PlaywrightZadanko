import { Page, expect } from '@playwright/test';
import { DataGenerator } from '../data/dataGenerator';

export class AuthenticationPage{
    constructor(protected page: Page){}

    createEmailAdress = this.page.locator('#email_create')
    createAccountBtn = this.page.locator('#SubmitCreate > span')

    async accountCreatEmail(){
        const email = DataGenerator.generateEmail();

        await this.createEmailAdress.fill(email);
        await this.createAccountBtn.click();
    }

}