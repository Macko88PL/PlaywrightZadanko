import {test} from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { AuthenticationPage } from '../pages/authenticationPage';
import { CreateAnAccountPage } from '../pages/createAnAccountPage';
import { MyAccountPage } from '../pages/myAccountPage';
import { DressesPage } from '../pages/dressesPage';
import { ShoppingCartSummaryPage } from '../pages/shoppingCartSummaryPage';
import { YourAddressesPage } from '../pages/yourAddressesPage';
import { OrderConfirmationPage } from '../pages/orderConfirmationPage';

test.describe('E2E Buy Dress', ()=>{
    let homePage: HomePage;
    let authenticationPage: AuthenticationPage;
    let createAnAccountPage: CreateAnAccountPage;
    let myAccountPage: MyAccountPage;
    let dressesPage: DressesPage;
    let shoppingCartSummaryPage: ShoppingCartSummaryPage;
    let yourAddressesPage: YourAddressesPage;
    let orderConfirmationAndPayment: OrderConfirmationPage;

    test.beforeEach(async ({page})=> {
        homePage = new HomePage(page);
        authenticationPage = new AuthenticationPage(page);
        createAnAccountPage = new CreateAnAccountPage(page);
        myAccountPage = new MyAccountPage(page);
        dressesPage = new DressesPage(page);
        shoppingCartSummaryPage = new ShoppingCartSummaryPage(page);
        yourAddressesPage = new YourAddressesPage(page);
        orderConfirmationAndPayment = new OrderConfirmationPage(page);
        await homePage.open()
    })

    test('E2E Buy Dresses',async ({page}) => {

        await homePage.checkVisibilityLogo()
        await homePage.signButtonClick()
        await authenticationPage.accountCreatEmail()
        
        const personalInfo = await createAnAccountPage.fillPersonalInformation();

        await createAnAccountPage.clickRegisterButton();
        await createAnAccountPage.checkCreateAccount(personalInfo.firstName, personalInfo.lastName);
        await myAccountPage.selectDressesTab();
        await dressesPage.selectDress();
        await dressesPage.proceedToCheckout();
        await shoppingCartSummaryPage.checkProduct();
        await shoppingCartSummaryPage.proceedToCheckout();
        
        const addressData = await yourAddressesPage.fillAdressData();

        await yourAddressesPage.clickSaveButton();
        await yourAddressesPage.checkDeliveryAddress(addressData.address, addressData.city, addressData.state, addressData.postalCode, addressData.mobilePhone);
        await yourAddressesPage.checkBillingAddress(addressData.address, addressData.city, addressData.state, addressData.postalCode, addressData.mobilePhone);
        await orderConfirmationAndPayment.orderConfirmationAndPayment();
        await orderConfirmationAndPayment.checkOrderWithPayment();
        
    })


})