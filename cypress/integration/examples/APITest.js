/// <reference types = "cypress" />


describe('My first API test suit',function(){
    
    it('API testcase',function(){
        cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
            "name":"Learning cypress with js",
            "isbn":"cypr",
            "aisle" : "345684",
            "author" : "John Foe"
        }).then(function(response){
            expect(response.body).to.have.property('Msg','successfully added');
            expect(response.status).to.eq(200);
        })
    })
})