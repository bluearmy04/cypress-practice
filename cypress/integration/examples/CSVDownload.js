/// <reference types="Cypress" />
const neatCSV = require('neat-csv')

describe('CSV Download',function(){

    it('CSV Download',async function(){
        cy.readFile(Cypress.config('fileServerFolder')+"/cypress/downloads/weekday.csv")
        .then(async(text)=>
        {
            const csv = await neatCSV(text);
            // for having space in property csv[0]["Product Name"]
            //console.log(csv[0].Name);
            const weekdayName = csv[0].Name;
            expect(weekdayName).to.equal('Monday')
        });        
    })    

})