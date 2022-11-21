/// <reference types= "Cypress"/>

describe('My Sixth Test Suite', function()
{

it('My Sixth Test Case',function() {

    cy.visit(Cypress.env('url') + "/AutomationPractice/");
    // cy.visit("http://qaclickacademy.com/practice.php");


    // Mouse Hover

    //Both ways work, first one is using the jquery method 'show' to display the system like the mouse is hover the element
    // And we can use the {force:true} so that the system finds in the DOM the element and force the click.


    cy.get('div.mouse-hover-content').invoke('show');
    cy.contains('Top').click();
    // cy.contains('Top').click({force:true});
    cy.url().should('include','top');

})

})