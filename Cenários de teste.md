# Feature: Acessar páginas corretamente

  Como um usuário,
  quero acessar página de carreiras e das soluções da NEXDOM
  a fim de obter informações sobre a empresa.

    Cenário: Deve acessar página de carreiras
    Dado que eu esteja na página de carreiras da NEXDOM
    Quando eu clicar em Acessar as vagas
    Então o navegador deve ser direcionado para a página https://vempranexdom.gupy.io/


    Cenário: Deve acessar as soluções da NEXDOM
    Dado que eu esteja na página inicial da NEXDOM
    Quando eu clicar em alguma das soluções presentes no rodapé da página
    Então o navegador deve ser redirecionado para a solução clicada
