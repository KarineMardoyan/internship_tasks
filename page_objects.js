/// <reference types="cypress" />



  export function  text () {
    cy.get('.inline > :nth-child(1) > .MuiButton-label').invoke('text')
    }

    export const locators = {
        address : '//div[contains(text(), "Possible Addresses")]',

        nationalId : '.row>:nth-child(2)>:nth-child(1)>.row>:nth-child(4)>:nth-child(2)>:nth-child(1)', 
        //#main>:nth-child(1)>:nth-child(1)>.list-component>.row>:nth-child(2)>:nth-child(1)>.row>:nth-child(4)>:nth-child(2)>:nth-child(1)
        
        biography : '#bio>:nth-child(1)>div[style]>.component-header>:nth-child(2)'
    }

    //export function calc (row, i){
        //expect(i).to.be(20)
        //}   expect().to.be  is not a function
