/// <reference types="cypress"/>

describe('Test suit 4',function(){
    it('Web Elements Test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{
            if($e1.text().includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text();
                    expect(priceText).to.equal('25');
                })
            }
        })

        //mouse hover using jquery
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        //moue hover with cypress
        //cy.contains('Top').click({force:true});
        cy.url().should('include','top');



    })
})