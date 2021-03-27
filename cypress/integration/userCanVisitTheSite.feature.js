describe('User visit the site', () => {
  it('test if connected to site', () => {
    cy.visit('/')
    cy.get('h1').contains('Hello World')
  })
})