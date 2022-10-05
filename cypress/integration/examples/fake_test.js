/// <reference types = "cypress" />

//import { get } from "cypress/types/lodash";

describe('My first API test suit',function(){
    
    it('API testcase',function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept({
            method : 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
            statusCode : 200,
            body : [{"book_name":"RestAssured with Java","isbn":"RSU","aisle":"2301"}]
        }).as('updatedResponse');

        cy.get('.btn-primary').click();
        cy.wait('@updatedResponse').should(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1);
        });
        cy.get('p').should('have.text','Oops only 1 Book available');
    })
})