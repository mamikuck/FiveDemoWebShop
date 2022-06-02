/*jshint esversion: 6 */
import { Given, Then, And, When } from "cypress-cucumber-preprocessor/steps";
import testData from "../../../../../fixtures/testData.json";
import testProducts from "../../../../../fixtures/testProducts.json";

Given(`User enters the webshop page`, () => {
  cy.visit(Cypress.env("baseURL"));
});

And(`Click on Login`, () => {
  cy.get(".nav-link").contains(Cypress.env("Login")).should("exist").click().wait(300);
});

And(`Proceed with Login`, () => {
  cy.Login(testData.UserNAME, testData.Password).wait(300);
});

When(`User selects category 2`, () => {
  cy.get(".list-group-item").contains(testProducts.Category2).should("exist").should("be.visible").click().wait(600);
});

When(`User selects category 3`, () => {
  cy.get(".list-group-item").contains(testProducts.Category3).should("exist").should("be.visible").click().wait(600);
});

Then(`Add desired product 1 to cart`, () => {
  cy.AddtoCart(testProducts.Product2);
});

Then(`Add desired product 2 to cart`, () => {
  cy.AddtoCart(testProducts.Product3);
});

And(`User selects cart`, () => {
  cy.get("#navbarExample").contains(Cypress.env("Cart")).should("exist").click().wait(600);
});

Then(`Verify that desired product 1 is in cart`, () => {
  cy.verifyCart(testProducts.Product2);
});

Then(`Verify that desired product 2 is in cart`, () => {
  cy.verifyCart(testProducts.Product3);
});

And(`Empty cart`, () => {
  cy.get("#page-wrapper").contains(Cypress.env("DeleteB")).should("exist").click().wait(800);
  cy.get(".success > :nth-child(1) > img").should("not.exist");
  cy.get(".success > :nth-child(2)").should("not.exist").wait(300);
  cy.get("#page-wrapper").contains(Cypress.env("DeleteB")).should("not.exist");
});
