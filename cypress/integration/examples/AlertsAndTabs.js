/// <reference types= "Cypress"/>

describe('My Fourth Test Suite', function()
{

it('My Fourth Test Case',function() {

    cy.visit(Cypress.env('url') + "/AutomationPractice/");
    // cy.visit("http://qaclickacademy.com/practice.php");


    // Alerts pop up

    // Cypress auto accept alerts and pop ups

    cy.get('#alertbtn').click();
    cy.get('#confirmbtn').click();
    //window:alert
    cy.on('window:alert', (str) => {

        // Cypress use Mocha test framework
        expect(str).to.equal('Hello , share this practice page and share your knowledge')

    })

    cy.on('window:confirm', (str) => {

        // Cypress use Mocha test framework
        expect(str).to.equal('Hello , Are you sure you want to confirm?')

        // Cypress will auto confirm the pop
        // To not confirm the pop up the user have to return false in the function
        return false;

    })


    // Switch Tabs

    // Cypress can't handle the switch tabs, so we use the invoke() method to remove the target attribute, so that the link will open on the same tab.
    cy.get('#opentab').invoke('removeAttr', 'target').click();

    cy.url().should('not.include', 'AutomationPractice')
    //Navigating browser controls using Cypress
    cy.go('back');
    cy.url().should('include', 'AutomationPractice')
    // cy.go('forward');


})

})