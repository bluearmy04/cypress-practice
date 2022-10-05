class PurchasePage{
    getCountryInput(){
        return cy.get('#country');
    }
    
    getTypedCountry(){
        return cy.get('.suggestions > ul > li > a');
    }

    getCheckbox(){
        return cy.get('#checkbox2');
    }

    getPurchaseButton(){
        return cy.get('input[type="submit"]');
    }

    getAlertBox(){
        return cy.get('.alert');
    }
   
}

export default PurchasePage;