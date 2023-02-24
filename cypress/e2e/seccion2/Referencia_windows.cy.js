//para que funciones los comandos de cypress
/// <reference types="Cypress" />
//para poder usar xpath
require('cypress-xpath');


describe('Referencia a windows', () => {
    it('Windows propiedades charset', () => {
        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should("eq","The Number Game")
        cy.wait(1000)

        //capturamos document del html
        cy.document().should("have.property","charset").and("eq","UTF-8")
        
    })

    it('Validar url', () => {
        cy.visit('https://testsheepnz.github.io/random-number.html')
        cy.title().should("eq","The Number Game")
        cy.wait(1000)

        //validar parte de la url
        cy.url().should("include","random-number.html")
        //validar toda la url, debe tener los mismo valores
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
    })
})