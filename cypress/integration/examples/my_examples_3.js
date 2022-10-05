/// <reference types="cypress"/>

describe('Test suit 3',function(){
    it('Web Elements Test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //checkboxes
        //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        //cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        //cy.get('input[type="checkbox"]').check(['option1','option3']);

        //static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');

        //dynamic dropdown
        cy.get('#autocomplete').type('ban');
        cy.get('.ui-menu-item div').each(($e1,index,$list)=> {
            if($e1.text() ==='Bangladesh'){
                //cy.log($list.length);
                cy.wrap($e1).click();
            }
        })
        cy.get('#autocomplete').should('have.value','Bangladesh');

        //visible invisible element
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        cy.get('input[value="radio2"]').check();
        cy.get('input[value="radio2"]').should('be.checked');

    })
})