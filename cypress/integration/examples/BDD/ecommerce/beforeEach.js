
beforeEach(function () {
  
    cy.fixture('example').then(function(data) {
      this.data=data
      cy.log(this.data)
    })
  
})