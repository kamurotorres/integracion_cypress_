
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('check uno ', () => {
    cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html')
    cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
    cy.wait(2000)
    //checkear todo los campos
    cy.get("[type='checkbox']").check().should("be.checked")
    cy.wait(2000)
    //deschekear todo los campos
    cy.get("[type='checkbox']").uncheck().should("not.be.checked")
    
 })
})