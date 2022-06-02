/*jshint esversion: 6 */
import { Given, Then, Before, When, And } from "cypress-cucumber-preprocessor/steps";
import testData from "../../../../../fixtures/testData.json";

const url = Cypress.env("baseURL");

let myBeforeCount = 0;

Given(`User enters the webshop page`, () => {
  cy.visit(Cypress.env("baseURL"));
});

When(`User clicks on Login button`, () => {
  cy.get(".nav-link").contains(Cypress.env("Login")).should("exist").click().wait(300);
  cy.get("#logInModal > .modal-dialog > .modal-content > .modal-header")
    .contains(Cypress.env("Login"))
    .should("exist")
    .should("be.visible");
  cy.get("#logInModal > .modal-dialog > .modal-content > .modal-body").should("exist").should("be.visible");
  cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer").should("exist").should("be.visible");
});

And(`User enters login data`, () => {
  cy.Login(testData.UserNAME, testData.Password).wait(300);
});

Then(`User is logged in`, () => {
  cy.get("#nameofuser").contains(Cypress.env("LoginMsg")).should("exist").should("be.visible");
});

And(`User name is displayed`, () => {
  cy.get("#nameofuser").contains(testData.UserNAME).should("exist").should("be.visible");
});
