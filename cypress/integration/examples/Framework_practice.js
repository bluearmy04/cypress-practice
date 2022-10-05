/// <reference types="cypress"/>
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
import CartPage from '../../support/pageObjects/CartPage'
import PurchasePage from '../../support/pageObjects/PurchasePage'
describe('Test suit 4',function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })

    it('Test Framework',function(){
        const homePage = new HomePage();
        const productPage = new ProductPage();
        const cartPage = new CartPage();
        const purchasePage = new PurchasePage();
        cy.visit(Cypress.env('url'));

        

        homePage.getNameInput().type(this.data.name);
        homePage.getGenderInput().select(this.data.gender);
        homePage.getTwoWayDataInput().should('have.value',this.data.name);
        homePage.getNameInput().should('have.attr','minlength','2');
        homePage.getDisabledRadioInput().should('be.disabled');

        //cy.pause()
        homePage.getShopTab().click();
        
        //using custom commands which is setup in commands.js file
        this.data.productName.forEach(element => {
            cy.selectProduct(element);
        });
        
        productPage.getCheckoutButton().click();
        var sum = 0;
        //Cypress.config('defaultCommandTimeout',8000);
        cartPage.getTotalColumnValue().each(($el,index,list)=>{
            var totalPrice = $el.text().split(' ');
            totalPrice = Number(totalPrice[1].trim());
            sum = sum+totalPrice;
        }).then(function(){
            //cy.log(sum);
        })
        cartPage.getTotalValue().then(function(element){
            var finalPrice = element.text().split(' ');
            finalPrice = Number(finalPrice[1].trim());
            expect(finalPrice).to.equal(sum);
        })
        cartPage.getCheckoutButton().click();
        purchasePage.getCountryInput().type('Banglad');
        purchasePage.getTypedCountry().click();
        purchasePage.getCheckbox().click({force:true});
        purchasePage.getPurchaseButton().click();
        purchasePage.getAlertBox().then(function(element){
            expect(element.text().includes('Success')).to.be.true;
        })


    })
})