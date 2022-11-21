/// <reference types= "Cypress"/>

describe('My Third Test Suite', function()
{

it('My Third Test Case',function() {

    cy.visit(Cypress.env('url') + "/AutomationPractice/");

    //Check boxes

    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

    //Radio Buttons

    //Both Ways are working
    // The parameter inside the method check() is tha attriute "value" of the HTML element
    

    cy.get('input[type="radio"]').check(['radio1','radio2']);
    cy.get('.radioButton').check('radio1').should('be.checked').and('have.value','radio1');


    //Static Dropdown
    cy.get('select').select('option2').should('have.value','option2');

    //Dynamic Dropdown
    cy.get('#autocomplete').type('ind');

    cy.get('.ui-menu-item div').each(($e1, index, $list) => {

        if($e1.text() === "India"){

            $e1.trigger('click');
        }
  
    })

    cy.get('#autocomplete').should('have.value','India');

    // Visible Elements/ Invisible ELements
    cy.get('#displayed-text').should('be.visible');    
    cy.get('#hide-textbox').click();
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click();
    cy.get('#displayed-text').should('be.visible');
    
})

})