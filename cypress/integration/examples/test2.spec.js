/// <reference types="Cypress" />

describe('Second Test', () => {
  it ('Secundo test case', () => {

    //CheckBox
    cy.visit(Cypress.env('url')+'/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    //DropDown
    cy.get('select').select('option2').should('have.value','option2')
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($cname, index, $list) => {
      if($cname.text() === "India") {
        $cname.trigger('click')
      }
    })
    cy.get('#autocomplete').should('have.value', 'India')

    //Visibility
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.wait(1000)
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //Radio
    cy.get('input[value="radio2"]').check().should('be.checked')

    cy.get('#alertbtn').click()
    cy.get('input[value="Confirm"]').click()

    //Window:alert & confirm
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

    //handling child tab
    cy.get('#opentab').invoke('removeAttr','target').click()

    cy.url().should('include','rahulshettyacademy')

    cy.go('back')

    cy.get('tr td:nth-child(2)').each(($1, index, $list) => {
      const name = $1.text()
      if(name.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then((price) => {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })
      }
    })

  })
})