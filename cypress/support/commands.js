// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add("signUp", (user) => {
  cy.get('[data-cy="signup"]').click();

  cy.url().should("equal", "http://localhost:3000/signup");

  cy.get('[data-cy="name"]').type(user.name);
  cy.get('[data-cy="email"]').type(user.email);
  cy.get('[data-cy="password"]').type(user.password);
  cy.get('[data-cy="confirmPassword"]').type(user.confirmPassword);
  cy.get('[data-cy="signUpButton"]').click();
});

Cypress.Commands.add("login", (user) => {
  cy.visit("http://localhost:3000/");
  cy.get('[data-cy="login"]').click();

  cy.url().should("equal", "http://localhost:3000/login");

  cy.get('[data-cy="email"]').type(user.email);
  cy.get('[data-cy="password"]').type(user.password);
  cy.get('[data-cy="loginButton"]').click();
});
