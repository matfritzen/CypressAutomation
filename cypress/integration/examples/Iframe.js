/// <reference types= "Cypress"/>
/// <reference types= "cypress-iframe"/>

import 'cypress-iframe'

describe('Frame Test', function()
{

    it('Frame Test',function() {

        cy.visit(Cypress.env('url') + "/AutomationPractice/");


        // Iframe
        cy.frameLoaded('#courses-iframe');

        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().wait(2000);
        cy.iframe().find("h1[class*='pricing-title ']").should('have.length', 2);



    })

})