class HomePage{
    getNameInput(){
        return cy.get(':nth-child(1) > .form-control');
    }

    getGenderInput(){
        return cy.get('#exampleFormControlSelect1');
    }

    getTwoWayDataInput(){
        return cy.get(':nth-child(4) > .ng-untouched');
    }

    getDisabledRadioInput(){
        return cy.get('#inlineRadio3');
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link');
    }

   
}

export default HomePage;