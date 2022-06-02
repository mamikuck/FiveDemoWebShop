/*jshint esversion: 6 */
import { And, Given, Then } from "cypress-cucumber-preprocessor/steps";
import testData from "../../../../../fixtures/testData.json";

const url = Cypress.env("baseURL");

Given(`User enters the webshop homepage`, () => {
  cy.visit(Cypress.env("baseURL")).wait(700);
});

Then(`The webshop homepage is displayed`, () => {
  cy.get("body").contains(Cypress.env("WebStore")).should("exist").should("be.visible");
  cy.get("#contcont").contains(Cypress.env("Categories")).should("exist").should("be.visible");
  cy.get(".d-block").should("exist").should("be.visible");
  cy.get(".card").should("exist").should("be.visible");
});

When(`User clicks on Contact button`, () => {
  cy.get(".nav-link").contains(Cypress.env("Contact")).click().wait(100);
});

Then(`The Contact form is displayed`, () => {
  cy.get("#exampleModal > .modal-dialog > .modal-content")
    .wait(200)
    .contains(Cypress.env("ContactUs"))
    .should("exist")
    .should("be.visible");
  cy.get("button:visible").contains("Close").click().wait(100);
});

When(`The user clicks on Sign up button`, () => {
  cy.get("#navbarExample").contains(Cypress.env("SignUp")).should("exist").should("be.visible").click().wait(300);
});

And(`The user enters new account data`, () => {
  cy.get("#sign-username").wait(100).type(testData.UserNAME).wait(200);
  cy.get("#sign-password").wait(100).type(testData.Password).wait(300);
  cy.get("button:visible").contains(Cypress.env("SignUp")).click().wait(300);
});
