describe("login and user registration", () => {
  beforeEach(() => {
    cy.visit("https://victorhugo-git-develop-mkplace.vercel.app/");
  });
  it.only("buying offline and without registration", () => {
    cy.get(":nth-child(1) > .h-5").click();
    cy.get(".border-t > :nth-child(1) > .-m-2").click();
    cy.get(
      ":nth-child(2) > :nth-child(1) > .max-w-xs > :nth-child(1) > .relative > .w-full"
    ).click();
    cy.contains("button", "COMPRE AGORA").click();
    cy.contains("button", "Aceitar cookies").click();
    cy.contains("button", "Avançar").click();
    cy.contains("span", "Quero me cadastrar").click();
    cy.get("#name").type("Teste Teste");
    cy.get("#document").type("297.334.310-01");
    cy.get("#phone").type("11999999999");
    cy.get("#email").type("teste.a@teste.com.br");
    cy.get("#password").type("Teste12");
    cy.get("#passwordVerify").type("Teste12");
    cy.contains("button", "Cadastrar").click();
    // cy.get(
    //   ".Toastify__toast-body > :nth-child(2)",
    //   "Cadastro realizado com sucesso!"
    // ).should("be.visible");

    //     cy.get("#password").type("a1234567");
    // cy.contains("button", "Acessar minha conta").click();
    // cy.contains("p", "Olá, ").should("be.visible");
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
      ":nth-child(1) > .mt-1 > .text-red-600",
      "Campo obrigatório"
    ).should("be.visible");
    cy.contains(
      ":nth-child(2) > .mt-1 > .text-red-600",
      "Campo obrigatório"
    ).should("be.visible");
  });
  it("login, email field blank and correct password", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#password").type("a1234567");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(
      ":nth-child(1) > .mt-1 > .text-red-600",
      "Campo obrigatório"
    ).should("be.visible");
  });
  it("login, email field blank and incorrect password", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#password").type("b1234567");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(
      ":nth-child(1) > .mt-1 > .text-red-600",
      "Campo obrigatório"
    ).should("be.visible");
  });
  it("login, password field blank and correct e-mail", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#username").type("mariana.assis@mkplace.com.br");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(
      ":nth-child(2) > .mt-1 > .text-red-600",
      "Campo obrigatório"
    ).should("be.visible");
  });
  it("login, password field blank and incorrect e-mail", () => {
    cy.get(".flex > .h-6").click();
    cy.get("#username").type("marianaassis@mkplace.com.br");
    cy.contains("button", "Acessar minha conta").click();
    cy.contains(
      ":nth-child(2) > .mt-1 > .text-red-600",
      "Campo obrigatório"
    ).should("be.visible");
  });
});
