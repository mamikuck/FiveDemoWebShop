/*jshint esversion: 6 */
import { Given, Then, Before, And } from "cypress-cucumber-preprocessor/steps";
import testData from "../../../../../fixtures/testData.json";

Given(`User enters the webshop page`, () => {
  cy.visit(Cypress.env("baseURL")).wait(200);
});

And(`Click on Login`, () => {
  cy.get(".nav-link").contains(Cypress.env("Login")).should("exist").click().wait(300);
});

And(`Proceed with Login`, () => {
  cy.Login(testData.UserNAME, testData.Password).wait(300);
});

When(`User clicks on Logout button`, () => {
  cy.get(".nav-link").contains(Cypress.env("Logout")).should("exist").click().wait(300);
});

Then(`User is logged out`, () => {
  cy.get("#nameofuser").contains(Cypress.env("LoginMsg")).should("not.exist");
  cy.get("#navbarExample").contains(Cypress.env("LoginMsg")).should("not.exist");
  cy.get("#navbarExample").contains(testData.UserNAME).should("not.exist");
});

And(`Login button is displayed`, () => {
  cy.get("#navbarExample").contains(Cypress.env("Login")).should("exist").should("be.visible");
});
