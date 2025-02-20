const generateRodneCislo = require("../rc_generator.js");

describe("Generátor českého rodného čísla", () => {
  it("vytvoří platné rodné číslo s lomítkem", () => {
    const rc = generateRodneCislo();
    expect(rc).to.match(/^\d{6}\/\d{3,4}$/);
    cy.log(rc);
  });

  it("vytvoří rodné číslo pro ženu", () => {
    const rc = generateRodneCislo({ gender: "female" });
    const month = parseInt(rc.slice(2, 4), 10);
    expect(month).to.be.greaterThan(50);
    cy.log(rc);
  });

  it("vytvoří rodné číslo pro muže", () => {
    const rc = generateRodneCislo({ gender: "male" });
    const month = parseInt(rc.slice(2, 4), 10);
    expect(month).to.be.lessThan(50);
    cy.log(rc);
  });

  it("vytvoří rodné číslo s konkrétním datem narození", () => {
    const rc = generateRodneCislo({ dateOfBirth: "1990-06-15" });
    expect(rc.startsWith("900615")).to.be.true;
    cy.log(rc);
  });

  it("ověří dělitelnost čísla 11 pro roky 1954+", () => {
    const rc = generateRodneCislo({ dateOfBirth: "2000-05-20" });
    const numericRc = parseInt(rc.replace("/", ""), 10);
    expect(numericRc % 11).to.equal(0);
    cy.log(rc);
  });
});
