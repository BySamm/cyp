/// <reference types="Cypress" />

describe('My first test suite', () => {

  it('My first test case', () => {

    cy.visit(Cypress.env('url')+"/seleniumPractise/#/");

    cy.get('.search-keyword').type('ca');
    cy.get('.product:visible').should('have.length',4);
    cy.get('.products').find('.product').should('have.length',4);
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(() => {
      console.log('Add Button Clicked');
    });

    cy.get('.products').find('.product').each(($1, index, $list) => {

      const txtVeg = $1.find('h4.product-name').text()
      if(txtVeg.includes('Cashews'))
      {
        $1.find('button').trigger('click')
      }
    })

    cy.get('.brand').should('have.text', 'GREENKART');

    cy.get('.brand').then((logement) => {
      cy.log(logement.text())
    })

    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.get('.promoCode').type('Rahul')
    cy.get('.promoBtn').click()
    cy.contains('Place Order').click()

  })

})