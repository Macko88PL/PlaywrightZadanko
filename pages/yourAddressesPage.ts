import { Page, expect } from '@playwright/test';
import { config } from '../data/config';

export class YourAddressesPage{
    constructor(protected page: Page){}

    address1 = this.page.locator('#address1');
    city = this.page.locator('#city');
    state = this.page.locator('#id_state');
    postalCode = this.page.locator('#postcode');
    mobilePhone = this.page.locator('#phone_mobile');
    savebtn = this.page.locator('#submitAddress > span');

    async fillAdressData(){
        const address = config.address;
        const city = config.city;
        const state = config.state;
        const postalCode = config.postalCode;
        const mobilePhone = config.mobilePhone;

        await this.address1.fill(address);
        await this.city.fill(city);
        await this.state.selectOption({label: state})
        await this.postalCode.fill(postalCode);
        await this.mobilePhone.fill(mobilePhone);
    }

    async clickSaveButton(){
        await this.savebtn.click();
    }
}