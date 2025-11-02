describe('Auth', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('should redirect to login if no auth cookie', () => {
    cy.clearCookies();
    cy.visit('http://localhost:3000/dashboard');
    cy.url().should('include', '/log-in');
  });

  it('should not log in with invalid credentials', function () {
    const user = this.users.invalidUser;
    cy.login(user.email, user.password);
    cy.get('[data-name="error-message"]').should('be.visible');
    cy.url().should('include', '/log-in');
  });
  it('should not log in with non-existent user', function () {
    const user = this.users.nonExistentUser;
    cy.login(user.email, user.password);
    cy.get('[data-name="error-message"]').should('be.visible');
    cy.url().should('include', '/log-in');
  });
  it('should log in with valid credentials', function () {
    const user = this.users.validUser;
    cy.login(user.email, user.password);
    cy.url().should('include', '/dashboard');
    cy.getCookie('authjs.session-token').should('not.be.null');
    cy.getCookie('authjs.csrf-token').should('not.be.null');
  });
});
