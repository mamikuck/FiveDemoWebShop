/*jshint esversion: 6 */
beforeEach(() => {
  cy.log(
    cy.clearCookies(),
    cy.clearLocalStorage(),

    "This will run before every scenario of Demo App"
  );
});
