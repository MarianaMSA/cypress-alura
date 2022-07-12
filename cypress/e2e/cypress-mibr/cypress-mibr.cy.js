describe("login and registro de usuário", () => {
  beforeEach(() => {
    cy.visit("https://shop.mibr.gg/");
  });
  it("login correct, start in home", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#username").type("mariana.assis@mkplace.com.br");
    cy.get("#password").type("a1234567");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains("p", "Olá, ").should("be.visible");
  });
  it("wrong password, check the error message", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#username").type("mariana.assis@mkplace.com.br");
    cy.get("#password").type("b1234567");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(".Toastify__toast-body", "E-mail ou senha inválidos").should(
      "be.visible"
    );
  });

  it("wrong e-mail, check the error message", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#username").type("marianaassis@mkplace.com.br");
    cy.get("#password").type("a1234567");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(".Toastify__toast-body", "E-mail ou senha inválidos").should(
      "be.visible"
    );
  });

  it("login, blank fields", () => {
    cy.get(".flex > .h-6").click();
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(
      '[data-testid="error-input-username"]',
      "Campo obrigatório"
    ).should("be.visible");
    cy.contains(
      '[data-testid="error-input-password""]',
      "Campo obrigatório"
    ).should("be.visible");
  });
});
