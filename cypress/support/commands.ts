/// <reference types="cypress" />

import LoginPage from './pages/Login';

Cypress.Commands.add('login', (email: string, password: string) => {
  LoginPage.visitPage();
  LoginPage.fillForm(email, password);
  LoginPage.submitForm();
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {c
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>;
//     }
//   }
// }
