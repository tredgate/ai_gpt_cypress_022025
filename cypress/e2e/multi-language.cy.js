describe("Multilingual testing", () => {
  const languages = Cypress.env("languages"); // Seznam jazyků z konfigurace

  languages.forEach((lang) => {
    context(`Testing in ${lang}`, () => {
      beforeEach(() => {
        Cypress.env("lang", lang); // Nastavíme aktuální jazyk
        cy.visit("/"); // Navštívíme stránku
      });

      it("should display correct login button text", () => {
        cy.getTranslation("login").then((loginText) => {
          //  cy.get("#login-button").should("have.text", loginText);
          cy.log(`Jazyk: ${lang}, text: ${loginText}`);
        });
      });

      it("should display correct welcome message", () => {
        cy.getTranslation("welcome").then((welcomeText) => {
          //  cy.get("#welcome-message").should("have.text", welcomeText);
          cy.log(`Jazyk: ${lang}, text: ${welcomeText}`);
        });
      });
    });
  });
});
