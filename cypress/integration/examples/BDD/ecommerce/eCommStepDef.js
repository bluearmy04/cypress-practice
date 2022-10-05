import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import CartPage from '../../../../support/pageObjects/CartPage'
import PurchasePage from '../../../../support/pageObjects/PurchasePage'

//running feature file
//node_modules\.bin\cypress run --spec cypress\integration\examples\BDD\ecommerce.feature --headed
//running with tags
//./node_modules/.bin/cypress-tags run -e TAGS='@Smoke' --headed

//add cucumberreport option in package.json file & run. Then cucumber-json fill be generated
//use htmlreport plugin/create js file(pass the details of the created json file)
//run js file - node cucumber-html-report.js

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();
const purchasePage = new PurchasePage();

Given('I open ECommerce Page',function(){
    cy.visit(Cypress.env('url'));
})

When('I add items to cart',function(){
    homePage.getShopTab().click();     
    //using custom commands which is setup in commands.js file
    this.data.productName.forEach(element => {
        cy.selectProduct(element);
    });
    
    productPage.getCheckoutButton().click();
})

And('validate the total price',()=>{
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

})

Then('select the country & verify Thanks message',()=>{
    cartPage.getCheckoutButton().click();
    purchasePage.getCountryInput().type('Banglad');
    purchasePage.getTypedCountry().click();
    purchasePage.getCheckbox().click({force:true});
    purchasePage.getPurchaseButton().click();
    purchasePage.getAlertBox().then(function(element){
        expect(element.text().includes('Success')).to.be.true;
    })
})

When('I fill the form details',function(dataTable){
    //homePage.getNameInput().type(this.data.name);
    //homePage.getGenderInput().select(this.data.gender);
    homePage.getNameInput().type(dataTable.rawTable[1][0]);
    homePage.getGenderInput().select(dataTable.rawTable[1][1]);
})

Then('validate the form behavior',function(){
    homePage.getTwoWayDataInput().should('have.value','minhaj');
    homePage.getNameInput().should('have.attr','minlength','2');
    homePage.getDisabledRadioInput().should('be.disabled');
})

And('Select the shop page',function(){
    homePage.getShopTab().click();
})