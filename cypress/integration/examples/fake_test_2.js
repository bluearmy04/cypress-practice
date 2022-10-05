/// <reference types = "cypress" />

//import { get } from "cypress/types/lodash";

describe('My first API test suit',function(){
    
    it('API testcase',function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
        {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
            
            req.continue((res)=>
            {
                expect(res.statusCode).to.equal(403);
            })
        }).as('dummyData');

        cy.get('.btn-primary').click();
        cy.wait('@dummyData')
    })
})