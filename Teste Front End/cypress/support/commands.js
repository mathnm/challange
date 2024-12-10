Cypress.Commands.add('goHome', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://nexdom.tec.br/')
})

Cypress.Commands.add('userInHomePage', () => {
    cy.get('[data-id = f43ef10]')
        .should('be.visible')
})

Cypress.Commands.add('goTo', (route, title) => {
    cy.scrollTo('bottom')
    cy.get(`footer a[href="https://nexdom.tec.br${route}"]`)
        .click()

    cy.contains('h2', title)
        .should('be.visible')
})