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

    checkAddress1Devlivery = this.page.locator('#address_delivery > .address_address1');
    checkCityStatePostalDelivery = this.page.locator('#address_delivery > .address_city');
    checkMobilePhoneDelivery = this.page.locator('#address_delivery > li:nth-child(6)');s

    checkAddress1Invoice = this.page.locator('#address_invoice > .address_address1');
    checkCityStatePostalInvoice = this.page.locator('#address_invoice > .address_city');
    checkMobilePhoneInvoice = this.page.locator('#address_invoice > li:nth-child(6)');

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

        return{address, city, state, postalCode, mobilePhone}
    }

    async clickSaveButton(){
        await this.savebtn.click();
    }

    async checkDeliveryAddress(address, city, state, postalCode, mobilePhone){

        await expect(this.checkAddress1Devlivery).toContainText(address);
        await expect(this.checkCityStatePostalDelivery).toContainText(city+", "+state+" "+postalCode);
        await expect(this.checkMobilePhoneDelivery).toContainText(mobilePhone);

    }

    async checkBillingAddress(address, city, state, postalCode, mobilePhone){

        await expect(this.checkAddress1Invoice).toContainText(address);
        await expect(this.checkCityStatePostalInvoice).toContainText(city+", "+state+" "+postalCode);
        await expect(this.checkMobilePhoneInvoice).toContainText(mobilePhone);

    }
}