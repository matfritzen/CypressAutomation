/// <reference types= "Cypress"/>
/// <reference types= "cypress-iframe"/>


describe('Google Print Result Test', function()
{

    it('Google Print Result Test',function() {

        cy.visit('https://www.google.com.br/');

        cy.get("input[name='q']").type("test");
        cy.get("input[name='btnK']").first().click();

        cy.get('a > h3').each((el, index, $list) => {

            if(index <= 10){
                cy.log(el.text());
            }

        });

    })

})