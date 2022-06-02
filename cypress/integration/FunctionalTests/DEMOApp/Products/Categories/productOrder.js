/*jshint esversion: 6 */
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import testData from "../../../../../fixtures/testData.json";
import testProducts from "../../../../../fixtures/testProducts.json";

When(`User selects Place order`, () => {
  cy.get("#page-wrapper").contains(Cypress.env("PlaceOrd")).should("exist").click().wait(800);
});

And(`Fill Order data`, () => {
  cy.get(".modal-content").should("exist").should("be.visible");
  cy.get("#name").wait(100).type(testProducts.UserNameOrder).wait(100);
  cy.get("#country").wait(100).type(testProducts.UserCountry).wait(100);
  cy.get("#city").wait(100).type(testProducts.UserCity).wait(100);
  cy.get("#card").wait(100).type(testProducts.UserCreditCardNumber).wait(100);
  cy.get("#month").wait(100).type(testProducts.Month).wait(100);
  cy.get("#year").wait(100).type(testProducts.Year).wait(100);
  cy.get("button").contains(Cypress.env("Purchase")).should("exist").click().wait(400);
});

Then(`The order is placed`, () => {
  cy.get(".sweet-alert").should("exist").should("be.visible");
  cy.get(".sweet-alert").contains(Cypress.env("OrderSucc")).should("exist").should("be.visible");
  cy.get(".lead").contains(testProducts.UserCreditCardNumber).should("exist").should("be.visible");
  cy.get(".lead").contains(testProducts.UserNameOrder).should("exist").should("be.visible");
  cy.get(".confirm").should("exist").should("be.visible").click().wait(500);
});

And(`Clicks on Logout button`, () => {
  cy.get("#logout2").should("exist").should("be.visible").click().wait(500);
  cy.get("#login2").should("exist").should("be.visible");
});
