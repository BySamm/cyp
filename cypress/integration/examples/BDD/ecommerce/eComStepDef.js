/// <reference types="Cypress" />

import HomePage from '../../../../support/pageObjects/homePage'
import ProductPage from '../../../../support/pageObjects/productPage'
 
 import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

  const homePage = new HomePage()
  const productPage = new ProductPage()
  let name

 Given ('I open Ecommerce Page', () => {
  cy.visit(Cypress.env('url')+"/angularpractice/")
 })

 When ('I add Items to cart', function() {
  homePage.getShopTab().click()

  cy.log(this.data.productName)
  
  this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
  });
  productPage.getCheckouts().click()
 })

 And ('Validate the total', () => {
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

  Then ('Select the country, submit and verify for success message', () => {
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

  // When('I fill the form', function() {
  //   homePage.getEditBox().type(this.data.name)
  //   homePage.getGender().select(this.data.gender)
    
  // })

  When('I fill the form', function(dataTable) {
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
    
  })

  Then('I Validate form behavior', function() {
    homePage.getTwoWayBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
  })

  And('Select shop page', () => {
    homePage.getShopTab().click()
  })


 })