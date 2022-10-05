/// <reference types="Cypress" />

describe('JWS Session Token',function(){

    it('Log in through local storage',function(){
        cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad : function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('authToken'))
                }
            })
        })
    
        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind");
        //below command does not work
        //for that reason created csv file sample & completed the rest part shown in part 91 of lecture of the course
        //cy.get('.ta-results button').each(($e1, index, $list) => {
            //if($e1.text()==="India")
            //{
                //cy.wrap($e1).click()
            //}
        //})
    })


})