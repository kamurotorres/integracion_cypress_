/// <reference types="Cypress" />
require('cypress-xpath');
//para que funciones los comandos de cypress
describe('Selects reto', () => {

     it('Reto 3 ', () => {
        cy.visit('http://demo.seleniumeasy.com/jquery-dual-list-box-demo.html')
        cy.title().should("eq","Selenium Easy - JQuery Dual List Box Demo")
        cy.wait(1000)
        cy.get(".pickData").should("be.visible").select(["Isis","Sophia","Alice"]).then(()=>{
            cy.get("button.pAdd").should("be.visible").click().then(()=>{
                cy.get("button.pAddAll").should("be.visible").click().then(()=>{
                    cy.get("button.pRemoveAll").should("be.visible").click()
                })
            })
        })
     })
})