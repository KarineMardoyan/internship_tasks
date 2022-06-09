/// <reference types = "cypress"/>

import {calc, locators} from "../page_objects"

it('should navigate to ardis', () => {
    cy.visit('https://staging-ardis.polixis.com/login')

    //Precondition
    //cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
    cy.xpath('//input[@placeholder="Username"]').type('testing.art')
    //cy.get('.MuiFormControl-root.text-field > .MuiInputBase-root > .MuiInputBase-input')
    cy.xpath('//input[@placeholder="Password"]').type('a&sTE9R1X&Obe9I3L!')
     //cy.xpath('//button[@type="button"]/span[contains(text(),"Login")]{enter}') ??????
     //cy.get('.MuiButtonBase-root').click()
     cy.xpath('//span[contains(text(),"Login")]').click()

     //Step 1
     //cy.xpath('//div[@id="root"]//div[@class="col-xs-6"]').should('have.text', 'ARDIS')???????????????
     //cy.get('.inline > :nth-child(1) > .MuiButton-label').should('have.text', 'News Search')
     cy.get('.inline > :nth-child(1) > .MuiButton-label').invoke('text').should('match', /^News/)
     cy.xpath('//input[@value="person"]').should('not.be.visible').and('be.checked')

     //Step 2
     cy.xpath('//input[@placeholder="First name, last name, middle name"]').type('arkady rotenberg')

     //Step3
     cy.get('.search-btn').as('search').click()
     //cy.get('@search').click() 
     cy.wait(5000)
     //cy.wait('@search')  The alias: continue did not match a route. maybe it's working on callback function?????????
     cy.get('.count').should('have.text', 2)

     //Step4
     cy.get(':nth-child(2) > .col-xs-12 > .pointer').click()
     cy.get('.btn-selected-result').should('be.visible')

     //Step5
     cy.get(':nth-child(4) > .col-xs-12 > .pointer').click({force: true}) //?/??????

     //Step6
     cy
        .get('.left-side > .node > :nth-child(1) > .best-guess')
        .should('have.text', ' Our Best Guess ').and('have.class','best-guess')
      
     //Step7
     cy.get('.left-side>:nth-child(1)>.timeline>.pointer').should('not.have.class', 'disabled').click()

     //Step8
     cy.xpath('//span[contains(text(), "Explore")]').click()

     //Step9
     cy.xpath('//span[contains(text(), "Continue")]').as('continue')
     cy.get('@continue').click().wait(15000)
     //cy.wait('@continue')  The alias: continue did not match a route. maybe it's a callback function ??????????

     //Step10
     cy.get('.MuiBox-root>:nth-child(17)').click()
     //or .MuiBox-root>:nth-child(17)>:nth-child(1) or>img why can't click

     //Step11
     expect(locators).to.not.have.property('id')  //why works the first????????????????????

     //Step12
     cy.get(locators.nationalId).invoke('text').should('equal', 'TIN: 470305596440, 780619032880,')

     //Step13
     //cy.get('.MuiBox-root>:nth-child(19)').should('be.visible')     whyyyyyyy??????????

     //Step14
     cy.wait(20000)   //why??????????????????
     cy.get('#newslive>:nth-child(1)>:nth-child(1)>:nth-child(3)>:nth-child(1)>:nth-child(1)>:nth-child(1)').click()
     cy.wait(15000)
     //cy.get('.full-screen-component>:nth-child(1)>:nth-child(2)>.row')

     //expect('.full-screen-component>:nth-child(1)>:nth-child(2)>.row').to.have.
     
     cy.get('.full-screen-component>:nth-child(1)>:nth-child(2)>.row').find('div').should('have.length', 20)
    }) 

    //expect(response.status).to.eq(200)

