describe("alura busca cursos", () => {
  beforeEach(() => {
    cy.visit("https://alura.com.br");
  });
  it("buscar curso de java", () => {
    cy.get("#header-barraBusca-form-campoBusca").type("Javascript");
    cy.get(".header-barraBusca-form-submit").click();
    cy.get("h4.busca-resultado-nome").should(
      "contain",
      "Formação JavaScript para back-end"
    );
  });
});
