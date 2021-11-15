/// <reference types="Cypress" />

describe('Fake test suite', () => {

  it('First fake test case', () => {

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept({
      method: 'GET',
      url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
      
    },
    {
      statusCode: 200,
      body: [
        {
          "book_name": "RestAssured with Java",
          "isbn": "BSG",
          "aisle": "2302"
      }
      ]
    }).as('bookretrieval')

    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookretrieval').should(({req, response}) => 
    {
      cy.get('tr').should('have.length', response.body.length + 1)
    })
    cy.get('p').should('have.text', 'Oops only 1 Book available')
  })
})
