class Login {
  visitPage() {
    cy.visit('http://localhost:3000/log-in');
  }
  fillForm(email: string, password: string) {
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
  }
  submitForm() {
    cy.get('button[type="submit"]').click();
  }
  assertOnLoginPage() {
    cy.url().should('include', '/log-in');
  }
}

export default new Login();
