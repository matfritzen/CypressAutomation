/// <reference types= "Cypress"/>

import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CheckoutPage from "../../pageObjects/CheckoutPage";

describe('My Eighth Test Suite', function()
{

    before(function(){
        
        cy.fixture('Test').then(function(data){

            this.data = data;
        })

    })

    it('My Eighth Test Case',function() {
        
        const homePage = new HomePage();
        const productPage = new ProductPage();
        const checkoutPage = new CheckoutPage();

        cy.visit(Cypress.env('url') + "/angularpractice/");
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr','minlength','2');
        homePage.getEntrepreneaur().should('be.disabled');

        // cy.pause(); method use to debug.

        homePage.getShopTab().click();
        
        this.data.productName.forEach(function(element){ 
            cy.selectProduct(element);
        });

        productPage.checkoutButton().click();
        var sum = 0;

        checkoutPage.productTotal().each(($el, index, $list) => {

            const amount = $el.text();
            var value = amount.split(" ")
            value = value[1].trim();
            sum = Number(sum) + Number(value);

        }).then(function(){

            cy.log(sum);

            checkoutPage.checkoutTotal().each((element) => {

                const totalValue = element.text();
                var total = totalValue.split(" ");
                total = Number(total[1].trim());

                expect(total).to.equal(sum);
            })
        })

        checkoutPage.clickCheckoutButton();
        checkoutPage.selectCountry("India");
        Cypress.config('defaultCommandTimeout', 10000); // Configuration for a specific spec file
        checkoutPage.checkCheckboxAgreeTermsAndConditions();
        checkoutPage.clickPurchaseButton();
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        checkoutPage.alertMessage().then(function(element){

            const actualText = element.text();
            expect(actualText.includes("Success")).to.be.true

        })
    })

})
