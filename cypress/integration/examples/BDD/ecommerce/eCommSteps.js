/// <reference types= "Cypress"/>

import HomePage from "../../../../pageObjects/HomePage";
import ProductPage from "../../../../pageObjects/ProductPage";
import CheckoutPage from "../../../../pageObjects/CheckoutPage";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage();
const productPage = new ProductPage();
const checkoutPage = new CheckoutPage();
let name;


Given("I open Ecommerce Page", () => // This abreviation in the function sintax is valid when the function doesn't have name
{

    cy.visit(Cypress.env('url') + "/angularpractice/");

})


//I add items to Cart

When("I add items to Cart", function() 
{
    homePage.getShopTab().click();
        
    this.data.productName.forEach(function(element){ 
        cy.selectProduct(element);
    });

    productPage.checkoutButton().click();
})

When("I fill the form details", function(dataTable) 
{
    name = dataTable.rawTable[1][0];
    homePage.getEditBox().type(dataTable.rawTable[1][0]);
    homePage.getGender().select(dataTable.rawTable[1][1]);
})




And("Validate the total prices", () => {

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
})

And("select the Shop Page", () => {

    homePage.getShopTab().click();
})


Then("select the country submit and verify Thank You message", () => {

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

Then("validate the forms behaviour", () => {

    homePage.getTwoWayDataBinding().should('have.value', name);
    homePage.getEditBox().should('have.attr','minlength','2');
    homePage.getEntrepreneaur().should('be.disabled');

})

