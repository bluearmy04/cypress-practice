/// <reference types="cypress"/>

describe('Test suit 4',function(){
    it('Web Elements Test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        cy.on('window:alert',(str)=>{
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        cy.on('window:confirm',(str)=>{
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

        //Cypress can not open in any new child tab. So we manually remove target attr & open in same tab
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.url().should('include','rahulshetty');
        cy.go('back');

    })
})