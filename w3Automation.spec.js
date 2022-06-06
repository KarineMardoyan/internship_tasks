/// <reference types = "cypress"/>

it('should be able to do smth', () => {
    cy.visit('https://www.w3schools.com/')

    cy.get('#search2').type('java script{enter}')

    cy.get('.gsc-results-wrapper-overlay').should('not.have.text', 'beer')

    //cy.xpath('(//a[@href="https://www.w3schools.com/js/"])[1]').click()

    cy.xpath('//a[@id="w3loginbtn"]').click()

    //this is unsuccessful login
    cy.xpath('//input[@name="email"]').type('karine12311111@gmail.com')
    cy.xpath('//input[@id="current-password"]').type('7<qBaC*(8NGk6~-{enter}')
    cy.xpath('//div[@class="Alert_wrapper__Aj7U+"]').should('have.text', 'A user with this email does not exist')

    //clear all inputed data
    cy.xpath('//input[@name="email"]').clear()
    cy.xpath('//input[@id="current-password"]').clear()

    //this is successful login
    cy.xpath('//input[@name="email"]').type('karine.mardoyan@mail.ru')
    cy.xpath('//input[@id="current-password"]').type('7<qBaC*(8NGk6~-{enter}')

    //successful sign up     :)
    //cy.get(':nth-child(2) > span').click()
    //cy.get('#modalusername').type('karine1231111@gmail.com')
    //cy.get('#new-password').type('7<qBaC*(8NGk6~-{enter}')
    //cy.get('#modal_first_name').type('Karine')
    //cy.get('#modal_last_name').type('Mardoyan{enter}')
    //cy.get('.Button_button__URNp\+ > span').click

})