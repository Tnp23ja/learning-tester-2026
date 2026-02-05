describe("Example Cypress", () => {
  it("type", () => {
    // เข้า website
    cy.visit("https://example.cypress.io/commands/actions?");

    cy.get(".action-btn").click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.get("#action-canvas").click();

    cy.get("#action-canvas").click("topLeft");
    cy.get("#action-canvas").click("top");
    cy.get("#action-canvas").click("topRight");
    cy.get("#action-canvas").click("left");
    cy.get("#action-canvas").click("right");
    cy.get("#action-canvas").click("bottomLeft");
    cy.get("#action-canvas").click("bottom");
    cy.get("#action-canvas").click("bottomRight");

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)

    cy.get("#action-canvas");
    cy.get("#action-canvas").click(80, 75); // click 80px on x coord and 75px on y coord
    cy.get("#action-canvas").click(170, 75);
    cy.get("#action-canvas").click(80, 165);
    cy.get("#action-canvas").click(100, 185);
    cy.get("#action-canvas").click(125, 190);
    cy.get("#action-canvas").click(150, 185);
    cy.get("#action-canvas").click(170, 165);

    // click multiple elements by passing multiple: true
    cy.get(".action-labels>.label").click({ multiple: true });

    // Ignore error checking prior to clicking
    cy.get(".action-opacity>.btn").click({ force: true });
  });
});
