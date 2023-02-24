/// <reference types="Cypress" />
require('cypress-xpath');
//para que funciones los comandos de cypress
describe('Assert', () => {
    it('Assert  ', () => {
       cy.visit('http://automationpractice.com/index.php')
       cy.title().should("eq","My Store")
       cy.wait(1000)
        //buscar dentro de un elemento donde se contenga es palabra
       cy.get("#block_top_menu").contains("Women").click()
    })

    it('Assert find, eq', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should("eq","My Store")
        cy.wait(1000)
         //buscar la clase y dps la vuelve buscar otro elemento y dps selecionar array con valor 0 le da click
        cy.get(".product-image-container").find(".product_img_link").eq(0).click()
     })

     it('Assert buscar texto, validamos que el vestido es nuevo', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.title().should("eq","My Store")
        cy.wait(1000)
         //buscar la clase y dps la vuelve buscar otro elemento y dps selecionar array con valor 0 le da click
        cy.get(".product-container").find(".product-image-container").eq(1).click()

        cy.get("#product_condition .editable").then((e) => {
            let estado = e.text()
            if(estado == e.text()){
               cy.log("el vestido es nuevo.")
            }
            
        })

        cy.get("#our_price_display").then((e)=>{
           let precio = e.text()
           cy.log("antes"+precio)
           //recorta el elemento teniedo en cuenta inicio 1 y final no 3
           precio=precio.slice(1,3)
           cy.log("despues"+precio)
           if(precio>30){
              cy.log("el vestido no se puede comprar por su valor")
              cy.xpath("//*[@id='columns']/div[1]/a[2]").click()
           }else{
              cy.log("El vestido se agrega al carrito")
              cy.get("#add_to_cart").click()
           }
        })
     })

     it('Assert contain.text y have.text  ', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.title().should("eq","ToolsQA")
      cy.wait(1000)
      //llenar formulario
      cy.get("#userName").should("be.visible").type("kevin")
      cy.get("#userEmail").should("be.visible").type("kevin@gmail.com")
      cy.get("#submit").should("be.visible").click()
      //validar que exista el texto completo
      cy.get("#name").should("have.text","Name:kevin")
      //valida que solo contenga palabra kevin
      cy.get("#name").should("contain.text","kevin")
   })

   //validar value de un campo y realizar algo
   it('Assert have.value con then', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.title().should("eq","ToolsQA")
      cy.wait(1000)
      //llenar formulario
      cy.get("#userName").should("be.visible").type("kevin")
      cy.get("#userName").should("have.value","kevin").then(()=>{
         cy.get("#userEmail").should("be.visible").type("kevin@gmail.com")
         cy.get("#submit").should("be.visible").click()
      })

   })

   //validar la clase 
   it('Assert have.class', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.title().should("eq","ToolsQA")
      cy.wait(1000)
      //valida que sea visible y tenga esa clase 
      cy.get("#userName").should("be.visible").should("have.class","mr-sm-2").then(()=>{
         cy.get("#userName").should("be.visible").type("kevin")
      })
   })

   //assert and 
   it('Assert have.class', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.title().should("eq","ToolsQA")
      cy.wait(1000)
      //valida que sea visible y tenga la clase con el operador and
      cy.get("#userName").should("be.visible").and("have.class","mr-sm-2").then(() => {
         cy.get("#userName").should("be.visible").type("kevin")
      })
   })

   //assert not
   it('Assert not.', () => {
      cy.visit('https://www.seleniumeasy.com/test/table-pagination-demo.html')
      cy.title().should("eq","ToolsQA")
      cy.wait(1000)
      //valida que sea visible y que no tenga la clase 
      cy.get("#userName").should("be.visible").and("not.have.class","mr-sm-22").then(() => {
         cy.get("#userName").should("be.visible").type("kevin")
      })
   })

   //assert length_Css validar el largo tabla obejto
   it('Assert length_css y validar css', () => {
      cy.visit('https://www.seleniumeasy.com/test/table-pagination-demo.html')
      cy.title().should("eq","ToolsQA")
      cy.wait(1000)
      //valida que sea visible y que no tenga la clase 
      cy.get("#myTable >tr >td").should("have.length",91).should("have.css","padding", "8px")
   })
   //assert contain
   it.only('Assert length_css y validar css', () => {
      let tiempo =1000
      cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
      cy.title().should("eq","Selenium Easy Demo - Simple Form to Automate using Selenium")
      cy.wait(1000)
      //dar click a la modal
      //cy.get(".at-cm-no-button").should("be.visible").click({force:true})
      cy.get(".form-group > #user-message").should("be.visible").type("Demo del contanido")
      cy.contains("[type='button']","Show Message").should("be.visible").click({force:true})
   })


})