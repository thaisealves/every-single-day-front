import newUser from "./factories/newUser";
import { faker } from "@faker-js/faker";
describe("Testing mood from the home page", () => {
  it("Should have an empty mood if none was clicked yet", () => {
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.signUp(user);
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");
    cy.get('[data-cy="mood"]').should("have.value", "");
  });
});

describe("Testing visions from home page", () => {
  it("Should have a picture if one is posted", () => {
    const image = faker.image.imageUrl();
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.signUp(user);
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");

    cy.get('[data-cy="addPic"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/vision");
    cy.get('[data-cy="newVision"]').type(image);
    cy.get('[data-cy="send"]').click();
    cy.visit("http://localhost:3000/home");
    cy.get('[data-cy="pictures"]').should("have.length", 1);
  });
  it("Should not have a picture if none was posted", () => {
    const image = faker.image.imageUrl();
    cy.visit("http://localhost:3000/");

    const user = newUser();
    cy.signUp(user);
    cy.login(user);

    cy.url().should("equal", "http://localhost:3000/home");

    cy.get('[data-cy="addPic"]').click({ force: true });
    cy.url().should("equal", "http://localhost:3000/vision");
    cy.get('[data-cy="newVision"]').type(image);
    cy.get('[data-cy="cancel"]').click();
    cy.visit("http://localhost:3000/home");
    cy.get('[data-cy="pictures"]').should("have.length", 0);
  });
});
