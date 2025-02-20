describe("PMTool Login Tests", () => {
  beforeEach(() => {
    cy.visit("https://tredgate.com/pmtool/"); // URL aplikace
  });

  it("Should log in successfully with valid credentials", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));

    // Očekávaný výsledek: uživatel je přihlášen
    cy.url().should("include", "dashboard");
    cy.get("#user_dropdown").should("be.visible");
  });

  it("Should show an error message for invalid credentials", () => {
    cy.login("invalidUser", "invalidPassword");

    // Očekávaný výsledek: zobrazení chybové zprávy
    cy.get(".alert")
      .should("be.visible")
      .and("contain", "No match for Username and/or Password.");
  });
});
