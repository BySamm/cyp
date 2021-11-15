class HomePage 
{

  getEditBox() 
  {
    return cy.get(':nth-child(1) > .form-control')
  }

  getGender()
  {
    return cy.get('select')
  }

  getTwoWayBinding()
  {
    return cy.get(':nth-child(4) > .ng-untouched')
  }

  getEntrepreneur()
  {
    return cy.get('#inlineRadio3')
  }

  getShopTab()
  {
    return cy.get(':nth-child(2) > .nav-link')
  }

}
export default HomePage;