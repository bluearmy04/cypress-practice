/// <reference types="Cypress" />
//Test Suite
describe('Test Suit 1',function(){
    //Test Case
    it('Proceed to checkout',function(){
        //driver.get
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //driver.findelements
        cy.get('.search-keyword').type('ca');
        //thread.sleep
        cy.wait(2000);
        //aliasing as variable
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($el,index, $list) =>{
            const textVeg = $el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
                //$el.contains('ADD TO CART').click();
                cy.wrap($el).find('button').click();
            }
        })

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
    })
})