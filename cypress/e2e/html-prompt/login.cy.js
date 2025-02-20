import LoginPage from "../../pages/html-prompt/loginPage.js";
import HomePage from "../../pages/html-prompt/homePage.js";

describe("Login Test Suite", () => {
  beforeEach(() => {
    //  cy.session("userSession", () => {
    LoginPage.visit();
    LoginPage.login(Cypress.env("username"), Cypress.env("password"));
    cy.get("#user_dropdown").should("be.visible");
    // cy.url().should("include", "dashboard");
    //  });
  });

  it("should log in successfully and land on the dashboard", () => {
    HomePage.verifyWelcomeMessage();
  });

  it("should allow user to log out", () => {
    HomePage.logout();
    cy.url().should("include", "module=users/login");
  });
});
