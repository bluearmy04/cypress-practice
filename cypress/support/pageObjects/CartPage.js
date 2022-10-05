class CartPage{
    getCheckoutButton(){
        return cy.contains('Checkout');
    }

    getTotalColumnValue(){
        return cy.get('tr td:nth-child(4) strong');
    }
    
    getTotalValue(){
        return cy.get('h3 > strong');
    }
}

export default CartPage;