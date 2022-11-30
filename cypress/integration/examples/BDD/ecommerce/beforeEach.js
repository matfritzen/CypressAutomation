beforeEach(() => {
    cy.fixture('Test').then(function(data){

            this.data = data;
    })
})


// In the steps that are going to use the "this.data". the methods should not use the shortcut of function method "() => " because the mocha pictures doesn't support this abreviation.