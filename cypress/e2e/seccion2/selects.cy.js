/// <reference types="Cypress" />
require('cypress-xpath');
//para que funciones los comandos de cypress
describe('Selects', () => {
    it('Select uno ', () => {
       cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
       cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
       cy.wait(1000)
       cy.get("#select-demo").should("be.visible").select("Friday")
       //validar la value de un select
       cy.get("#select-demo").should("be.visible").select("Saturday").should("have.value","Saturday")
       
    })

    it('Select dos ', () => {
        cy.visit('https://www.google.com/')
        cy.title().should("eq","Google")
        cy.wait(1000)
        cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        cy.get('.MUFPAc > :nth-child(2) > a').click()
     })

     it.only('Multi select ', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-select-dropdown-demo.html')
        cy.title().should("eq","Selenium Easy Demo - Automate All Scenarios")
        cy.wait(1000)
        cy.get("#multi-select").should("be.visible").select(["California","Ohio","Washington"]).then(()=>{
            cy.get("#printMe").should("be.visible").click()
        })
     })
})