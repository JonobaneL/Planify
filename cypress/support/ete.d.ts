/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login via UI
     * @example cy.login('test@test.com', 'password123')
     */
    login(email: string, password: string): Chainable<void>;
  }
}
