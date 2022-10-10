import newUser from "./factories/newUser";
import { faker } from "@faker-js/faker";
describe("Diaries possibilities", () => {
  it("Diary page should be empty with no records", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST");
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="diaryFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/diary");
    cy.get('[data-cy="text"]').should("have.length", 0);
  });

  it("Add new plan", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST");
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="diaryFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/diary");
    cy.get('[data-cy="plans"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/newplan");
    cy.get('[data-cy="newplan"]').type(faker.lorem.paragraph());
    cy.get('[data-cy="send"]').click();
    cy.url().should("equal", "http://localhost:3000/diary");

    cy.get('[data-cy="text"]').should("have.length", 1);
  });
  it("Add new diary", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.intercept("POST");
    cy.intercept("POST", "http://localhost:4000/signup").as("newUser");
    cy.signUp(user);

    cy.wait("@newUser");
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="diaryFooter"]').click();
    cy.url().should("equal", "http://localhost:3000/diary");
    cy.get('[data-cy="diary"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/newdiary");
    cy.get('[data-cy="newdiary"]').type(faker.lorem.paragraph());
    cy.get('[data-cy="send"]').click();
    cy.url().should("equal", "http://localhost:3000/diary");

    cy.get('[data-cy="text"]').should("have.length", 1);
  });
});
