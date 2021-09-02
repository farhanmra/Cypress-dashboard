Cypress.Commands.add('loginDashboard',()=>{
    cy.visit('https://admin.pkh.dojobox.id')
    cy.wait(2000)
    cy.get('#input-email').type('e@dojobox.id')
    cy.wait(2000)
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.contains('Super Admin').should('exist')
})

Cypress.Commands.add('bukaUrl',()=>{
    cy.visit('https://admin.pkh.dojobox.id')
})

import 'cypress-file-upload'