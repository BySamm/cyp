class ProductPage
{
  getCheckouts()
  {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
  }

  getPriceSum()
  {
    return cy.get('tr td:nth-child(4) strong')
  }

  getTotalCost()
  {
    return cy.get('h3 strong')
  }

  checkout()
  {
    return cy.get(':nth-child(6) > :nth-child(5) > .btn')
  }

  getEditBox()
  {
    return cy.get('#country')
  }

  getSuggestion()
  {
    return cy.get('.suggestions > :nth-child(1) > li > a')
  }

  getCheckBox()
  {
    return cy.get('#checkbox2')
  }

  purchase()
  {
    return cy.get('form.ng-untouched > .btn')
  }
}

export default ProductPage