/// <reference types= "Cypress"/>

describe('My Seventh Test Suite', function()
{

    it('My Seventh Test Case',function() {

        cy.visit(Cypress.env('url') + "/AutomationPractice/");


        // Child Windows
        cy.get('#opentab').then(function(el){

        const url = el.prop('href');

        cy.visit(url);
        // visit method wiill not allow you to visit another domain. E.g: Another domain different of https://rahullshettyacademy.com/

        cy.url().should('not.include', 'AutomationPractice')
        })

    })

})