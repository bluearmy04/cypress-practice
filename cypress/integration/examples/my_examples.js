/// <reference types="Cypress" />
//Test Suite
describe('Test Suit 1',function(){
    //Test Case
    it('Opening Browser',function(){
        //driver.get
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //driver.findelements
        cy.get('.search-keyword').type('ca');
        //thread.sleep
        cy.wait(2000);
        //aliasing as variable
        cy.get('.products').as('productLocator')
        //cy.get('.product:visible').should('have.length',5);
        //parent child chaining
        cy.get('@productLocator').find('.product').should('have.length',4);
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();

        cy.get('@productLocator').find('.product').each(($el,index, $list) =>{
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
                //$el.contains('ADD TO CART').click();
                cy.wrap($el).find('button').click();
            }
        })

        //below statement will not work as we mixed non cypress code & cypress get confused which promise to resolve first
        //const logo = cy.get('.brand').text();
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text());
        })
    })
})