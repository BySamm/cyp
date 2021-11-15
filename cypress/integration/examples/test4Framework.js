/// <reference types="Cypress" />

import HomePage from '../../support/pageObjects/homePage'
import ProductPage from '../../support/pageObjects/productPage'

describe('Test suite for framework', () => {

  before(function() {
    cy.fixture('example').then(function(data) {
      this.data=data
      cy.log(this.data)
    })
  })

  it('Test case 1', function() {

    const homePage = new HomePage()
    const productPage = new ProductPage()

    cy.visit(Cypress.env('url')+"/angularpractice/")
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayBinding().should('have.value',this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
    homePage.getShopTab().click()

    cy.log(this.data.productName)
    
    this.data.productName.forEach(function(element) {
      cy.selectProduct(element)
    });
    productPage.getCheckouts().click() 
    var sum = 0
    productPage.getPriceSum().each(($1, index, list) => {
      cy.log(($1.text()))
      var inText = $1.text().split(" ")
      inText = inText[1].trim()
      sum = sum + Number(inText)
    }).then(() => {
      cy.log(sum)
    })
    productPage.getTotalCost().then((element) => {
      const value = element.text()
      var text = value.split(" ")
      text = text[1].trim()
      expect(Number(text)).to.eq(sum)
    })
    productPage.checkout().click()
    productPage.getEditBox().type('India')
    productPage.getSuggestion().click()
    productPage.getEditBox().should('have.value', "India")
    productPage.getCheckBox().click({force:true})
    productPage.purchase().click()
    cy.get('.alert').then((element) => {
      const actualText = element.text()
      expect(actualText.includes('Success')).to.be.true
    })

  })
})