import newUser from "./factories/newUser";
import { faker } from "@faker-js/faker";
describe("Water possibilities", () => {
  it("Water page should be empty with no records", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="waterFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/water");
    cy.get('[data-cy="amountEmpty"]').should("have.length", 0);
  });

  it("Add new weight", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="waterFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/water");
    cy.get('[data-cy="weight"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/addweight");
    cy.get('[data-cy="addweight"]').type(faker.datatype.number(100));
    cy.get('[data-cy="send"]').click();
    cy.url().should("equal", "http://localhost:3000/water");

    cy.get('[data-cy="amount"]').should("have.length", 1);
  });
  it("Add new water amount", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="waterFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/water");
    cy.get('[data-cy="water"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/addwater");
    cy.get('[data-cy="addwater"]').type(faker.datatype.number(10));
    cy.get('[data-cy="send"]').click();
    cy.url().should("equal", "http://localhost:3000/water");

    cy.get('[data-cy="amount"]').should("have.length", 1);
  });
  it("Adding weight and water", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="waterFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/water");

    cy.get('[data-cy="weight"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/addweight");
    cy.get('[data-cy="addweight"]').type(faker.datatype.number(100));
    cy.get('[data-cy="send"]').click();
    cy.url().should("equal", "http://localhost:3000/water");

    cy.get('[data-cy="water"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/addwater");
    cy.get('[data-cy="addwater"]').type(faker.datatype.number(10));
    cy.get('[data-cy="send"]').click();
    cy.url().should("equal", "http://localhost:3000/water");

    cy.get('[data-cy="amount"]').should("have.length", 1);
    cy.get('[data-cy="progress"]').should("have.length", 1);
  });
  it("Cancel sending water", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="waterFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/water");
    cy.get('[data-cy="water"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/addwater");
    cy.get('[data-cy="cancel"]').click();
    cy.url().should("equal", "http://localhost:3000/water");

    cy.get('[data-cy="amount"]').should("have.length", 0);
  });
});
