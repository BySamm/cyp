/// <reference types="Cypress" />

describe('Fake test suite', () => {

  it('First fake test case', () => {

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
      (req) => 
      {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Me";

        req.continue((res) => 
        {
           //expect(res.statusCode).to.eq(403)
        })
 
      }).as('dummyUrl')

    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@dummyUrl')

  })
})
