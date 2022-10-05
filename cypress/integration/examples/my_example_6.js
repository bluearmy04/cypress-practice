/// <reference types="cypress"/>
/// <reference types="cypress-iframe"/>
import 'cypress-iframe'

describe('Test suit 4',function(){
    it('Web Elements Test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');


        cy.frameLoaded('#courses-iframe');

        cy.iframe().find("a[href*='mentorship']").eq(0).click();

        //Not working
        //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)



    })
})