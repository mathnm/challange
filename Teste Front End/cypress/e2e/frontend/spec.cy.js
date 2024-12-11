describe('template spec', () => {

  beforeEach(() => {
    cy.goHome()
    cy.userInHomePage()
  })

  //Valida href vinculado ao botão sem necessidade de clique
  it('Valida acesso ao portal de carreiras', () => {
    cy.get('[id="e-n-menu-title-2394"]').should('be.visible').click()

    cy.get('[data-id="9212cd1"]').should('be.visible')

    cy.get('[data-id="0011d89"] .elementor-button')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href')
      .then((href) => {
        expect(href).to.eq('https://vempranexdom.gupy.io/');
      });
  });

  //Valida href dos links do rodapé para cada solução utilizando Commands
  it('Valida acesso a todas as soluções', () => {

    cy.goTo('/gestao-de-planos-de-saude/', 'Gestão de Planos de Saúde')
    cy.goTo('/autorizacao-e-atendimento/', 'Autorização e Atendimento')
    cy.goTo('/ressarcimento-ao-sus/', 'Ressarcimento ao SUS')
    cy.goTo('/portal-da-empresa-e-beneficiario/', 'Portal da Empresa e Beneficiário')
    cy.goTo('/gestao-de-relacionamento-e-ouvidoria/', 'Gestão de Relacionamento e Ouvidoria')
    cy.goTo('/business-intelligence/', 'Business Intelligence')
    
  });

})