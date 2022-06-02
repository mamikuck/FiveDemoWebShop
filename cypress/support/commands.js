/*jshint esversion: 6 */
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
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("Login", (USER, PASS) => {
  cy.get("#loginusername").wait(100).type(USER).wait(300);
  cy.get("#loginpassword").wait(100).type(PASS).wait(300);
  cy.get("button:visible").contains(Cypress.env("Login")).click().wait(300);

  cy.get("body").then(($body) => {
    // synchronously ask for the body's text and conditional testing based on its visibility
    if ($body.text().includes("Wrong password.")) {
      cy.log("Wrong password entered - test fail");
      cy.get("button").contains("OK").click.wait(300);
    } else {
      // popup text not found
      cy.log("USER is logged in");
    }
  });
});

Cypress.Commands.add("AddtoCart", (ProductN) => {
  cy.get(".card-block").contains(ProductN).should("exist").should("be.visible").click().wait(400);
  cy.get(".name").contains(ProductN).should("exist").should("be.visible");
  cy.get(".btn:visible").contains(Cypress.env("AddtoCart")).should("exist").click().wait(300);
});

Cypress.Commands.add("verifyCart", (productname) => {
  cy.get("#page-wrapper").contains(Cypress.env("Products")).should("exist").should("be.visible");
  cy.get("button:visible").contains(Cypress.env("PlaceOrd")).should("exist");
  cy.get(".success > :nth-child(1) > img").should("exist").should("be.visible");
  cy.get("#page-wrapper").contains(productname).should("exist").should("be.visible");
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
