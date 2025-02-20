describe("Můj první Cypress test", () => {
  it("Navštíví stránku a ověří titulek", () => {
    cy.visit("https://example.cypress.io"); // Otevře testovací stránku
    cy.contains("h1", "Kitchen Sink"); // Ověří, že stránka obsahuje titulek "Kitchen Sink"
  });
});
