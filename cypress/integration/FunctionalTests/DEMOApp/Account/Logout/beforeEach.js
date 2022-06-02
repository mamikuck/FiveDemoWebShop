/*jshint esversion: 6 */
beforeEach(() => {
  cy.log(
    cy.clearCookies(),
    cy.clearLocalStorage(),

    "This will run before every scenario of Logout.feature test, but NEVER for other feature files"
  );
});
