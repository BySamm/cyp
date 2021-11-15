/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My third test suite', () => {

  it('The third test case', () => {

    cy.visit(Cypress.env('url')+'/AutomationPractice/')

    //Handling Mousehover
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()
    //cy.contains('Top').click({force:true})
    cy.url().should('include','top')

    //Handling tabs
    cy.get('#opentab').then(($1) => {

      const url = $1.prop('href')
      cy.visit(url)
    })
    cy.go('back')

    //handling iframes
    cy.frameLoaded('#courses-iframe')

    cy.iframe().find("a[href*='mentorship']").eq(0).click()
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

  })
})