describe('API Test suite', () => {
  it('API Test case', () => {

    cy.request('POST', 'https://216.10.245.166/Library/Addbook.php',
    {
      "name": "Learn Appium Automation with Python",
      "isbn": "bsssds",
      "aisle": "240v1",
      "author": "Author Foe"
    }).then((res) => {
      expect(res.body).to.have.property("Msg", "successfully added")
      expect(res.status).to.eq(200)
    })
  })
})