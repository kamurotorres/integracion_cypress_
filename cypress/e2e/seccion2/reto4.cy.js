/// <reference types="Cypress" />
require('cypress-xpath');
//para que funciones los comandos de cypress
describe('Assert', () => {
    //assert contain reto
   it.only('Assert length_css y validar css', () => {
      let tiempo =1000
      cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
      cy.title().should("eq","Selenium Easy Demo - Simple Form to Automate using Selenium")
      cy.wait(1000)
      //dar click a la modal
      //cy.get(".at-cm-no-button").should("be.visible").click({force:true})
      let a= 30
      let b= 35

      cy.get("#sum1").should("be.visible").should("have.class","form-control").type(a)
      cy.get("#sum2").should("be.visible").should("have.class","form-control").type(b)
      //buscamos un elemento por texto q tenga
      cy.contains("[type='button']","Get Total").click()
      cy.get("#displayvalue").should("be.visible").then((e) => {
         let r= a+b
         cy.log("el valor de r=  "+r )
         cy.log("valor de la variable e= "+e.text())
         let resultado = e.text()

         if(resultado==r){
            cy.log("los valores son iguales")
         } else {
            cy.log("los valores son diferentes")
         }

         if(resultado>50){
            a = a-10
            b = b-10


            cy.get("#sum1").invoke("attr","placeholder").should("contain","Enter value").then(() => {
               cy.get("#sum1").clear().type(a)
               cy.get("#sum1").invoke("attr","style","color:blue")
            })

            cy.get("#sum2").invoke("attr","placeholder").should("contain","Enter value").then(() => {
               cy.get("#sum2").clear().type(a)
               cy.get("#sum2").invoke("attr","style","color:blue")
            })
            
            //cy.get("#sum2").should("be.visible").should("have.class","form-control").clear().type(b)
            
            cy.contains("[type='button']","Get Total").click()

            cy.get("#displayvalue").should("be.visible").then(() => {
               cy.get("#displayvalue").invoke("attr","style","color:red")
            })

         }else{
            a = a+5
            b = b+5
            cy.get("#sum1").should("be.visible").should("have.class","form-control").clear().type(a)
            cy.get("#sum2").should("be.visible").should("have.class","form-control").clear().type(b)
            cy.contains("[type='button']","Get Total").click()
         }

      })


   })


})