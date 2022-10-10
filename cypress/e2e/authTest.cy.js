import newUser from "./factories/newUser";

beforeEach(async () => {
  await cy.request("POST", "http://localhost:4000/e2e/reset", {});
});

describe("Testing the auth routes", () => {
  it("Should create a new user", () => {
    cy.visit("http://localhost:3000/");
    const user = newUser();
    cy.get('[data-cy="signup"]').click();

    cy.url().should("equal", "http://localhost:3000/signup");

    cy.get('[data-cy="name"]').type(user.name);
    cy.get('[data-cy="email"]').type(user.email);
    cy.get('[data-cy="password"]').type(user.password);
    cy.get('[data-cy="confirmPassword"]').type(user.confirmPassword);
    cy.get('[data-cy="signUpButton"]').click();

    cy.url().should("equal", "http://localhost:3000/login");
  });

  it("Should login with a new user", () => {
    cy.visit("http://localhost:3000/");
    const user = newUser();
    cy.get('[data-cy="signup"]').click();

    cy.url().should("equal", "http://localhost:3000/signup");

    cy.get('[data-cy="name"]').type(user.name);
    cy.get('[data-cy="email"]').type(user.email);
    cy.get('[data-cy="password"]').type(user.password);
    cy.get('[data-cy="confirmPassword"]').type(user.confirmPassword);
    cy.get('[data-cy="signUpButton"]').click();

    cy.url().should("equal", "http://localhost:3000/login");

    cy.get('[data-cy="email"]').type(user.email);
    cy.get('[data-cy="password"]').type(user.password);
    cy.get('[data-cy="loginButton"]').click();

    cy.url().should("equal", "http://localhost:3000/home");
  });
});
