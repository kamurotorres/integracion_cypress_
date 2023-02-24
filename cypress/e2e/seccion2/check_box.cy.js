/// <reference types="Cypress" />
require('cypress-xpath');
//para que funciones los comandos de cypress
describe('Nueva seccion checkbox', () => {
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

    it('check por seleccion', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-checkbox-demo.html')
        cy.title().should("eq","Selenium Easy - Checkbox demo for automation using selenium")
        cy.wait(2000)
        //checkear por seleccion
        //cy.get("#isAgeSelected").check().should("be.checked")
        //cy.xpath("(//input[contains(@type,'checkbox')])[5]").check().should("be.checked")
        //cy.get(':nth-child(6) > label > .cb1-element').check().should("be.checked")
        //chekear con click
        cy.get("#isAgeSelected").click()
        cy.xpath("(//input[contains(@type,'checkbox')])[5]").click()
    })

    it.only('radio button seleccion', () => {
        cy.visit('http://demo.seleniumeasy.com/basic-radiobutton-demo.html')
        cy.title().should("eq","Selenium Easy Demo - Radio buttons demo for Automation")
        cy.wait(2000)
        //checkear por seleccion
        cy.get('.panel-body > :nth-child(3) > input').check().should("be.checked")
        
    })
})