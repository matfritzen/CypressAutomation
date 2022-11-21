/// <reference types= "Cypress"/>

describe('My First Test Suite', function()
{

it('My First Test Case',function() {

    cy.visit(Cypress.env('url') + "/seleniumPractise/#/");
    
    cy.get('.search-keyword').type('ca')
    cy.wait(2000);
    // Asserting the products by the Visible property of the attribute
    
    cy.get('.product:visible').should('have.length', 4)

    // Parent child chaining
    cy.get('.products').as('productLocator');
    cy.get('@productLocator').find('.product').should('have.length', 4)

    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

    //console.log('test'); - Javascript method to log - It will be printed in the console of the browser (The Devtools of Chrome)

    cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

        const textVeg = $e1.find('h4.product-name').text();

        if(textVeg.includes('Cashews'))
        {
            cy.wrap($e1).find('button').click();
            
        }
  
    })

    //assert if logo text is correctly displayed
    cy.get('.brand').should('have.text','GREENKART')


    // Non cypress commands cannot resolve promise by themselves. We need to manually resolve it by then()
    // this is to print in the logs
    cy.get('.brand').then(function(logoelement){

        cy.log(logoelement.text()) // Cypress log will be displayed in the log exectuion of the test
    })

})

})