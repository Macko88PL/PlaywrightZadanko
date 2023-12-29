import { Page, expect } from '@playwright/test';
import { DataGenerator } from '../data/dataGenerator';
import { config } from '../data/config';


export class CreateAnAccountPage{
    constructor(protected page: Page){}

    titleMr = this.page.locator("#id_gender1");
    firstName = this.page.locator("#customer_firstname");
    lastName = this.page.locator("#customer_lastname");
    password = this.page.locator("#passwd");
    dayBirth = this.page.locator("#days");
    mounthsBirth = this.page.locator("#months");
    yearBirth = this.page.locator("#years");
    registerBtn = this.page.locator("#submitAccount > span");

    async fillPersonalInformation(){
        const firstName = DataGenerator.generateFirstName();
        const lastName = DataGenerator.generateLastName();
        const password = config.password;
        const dayBirth = config.day;
        const mounthsBirth = config.months;
        const yearBirth = config.year

        await this.titleMr.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.password.fill(password);
        await this.dayBirth.selectOption({value: dayBirth});
        await this.mounthsBirth.selectOption({value: mounthsBirth});
        await this.yearBirth.selectOption({value: yearBirth});
    }

    async clickRegisterButton(){
        await this.registerBtn.click();
    }

}