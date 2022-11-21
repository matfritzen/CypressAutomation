/// <reference types= "Cypress"/>

describe('My Fifth Test Suite', function()
{

it('My Fifth Test Case',function() {

    cy.visit(Cypress.env('url') + "/AutomationPractice/");
    // cy.visit("http://qaclickacademy.com/practice.php");


    // Web Tables


    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text = $el.text();

        if(text.includes("Python"))
        {
            //Moving to the sibling element
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            
                const priceText = price.text();
                expect(priceText).to.equal('26');

            });
        }
      
    });

})

})