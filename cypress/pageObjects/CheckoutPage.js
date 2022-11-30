class CheckoutPage {

    productTotal()
    {
        return cy.get('tr td:nth-child(4) strong');
    }

    checkoutTotal()
    {
        return cy.get('.text-right h3 strong');
    }

    alertMessage()
    {
        return cy.get('.alert');
    }

    clickCheckoutButton()
    {
        cy.contains('Checkout').click();
    }

    selectCountry(country)
    {
        cy.get('#country').type(country);
        cy.get('.suggestions > ul > li > a').click();
    }

    checkCheckboxAgreeTermsAndConditions()
    {
        cy.get('#checkbox2').click({force:true});
    }

    clickPurchaseButton()
    {
        cy.get('input[type="submit"]').click();
    }


}
export default CheckoutPage;