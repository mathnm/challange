# Challange

## Passo a Passo para Configuração e Execução Projeto Front End
* **Pré-requisitos:**
    * **Software:** Gerenciador de pacotes NPM.
* **Clonando o Repositório:**
    * Clonar o repositório https://github.com/mathnm/challange.git.
* **Instalando Dependências:**
    * Instalar Cypress na pasta do projeto (challange\Teste Front End) (`npm install cypress`).
* **Executando o Projeto:**
    * Abrir a pasta do projeto (challange\Teste Front End) pelo terminal e rodar o comando (`npx cypress run`).
* **Verificando resultados:**
    * Ao executar os testes no passo anterior, pelo próprio terminal é possível verificar os resultados dos testes.
 
## Passo a Passo para Configuração e Execução Projeto Back End
* **Pré-requisitos:**
    * **Software:** Postman.
* **Clonando o Repositório:**
    * Clonar o repositório https://github.com/mathnm/challange.git.
* **Importando ambiente e coleção para o Postman:**
    * Abrir o Postman, criar um workspace em branco, clicar em Import e selecionar o arquivo de ambiente (\challange\Teste API\Github App.postman_environment).
	 * Feito isso, importar o arquivo de coleção (\challange\Teste API\GithubAPITest.postman_collection).
	 * Após realizar as duas importações, alterar o ambiente para "GitHub App".
	 * Nas variáveis de ambiente "GitHub App", setar o valor da variável GITHUB_TOKEN com o código enviado por e-mail.
* **Executando o Projeto:**
    * Na coleção importada, clicar nos três pontos e em "Run Collection" e confirmar no botão laranja "Run GithubAPITest.
* **Verificando resultados:**
    * Ao executar os testes no passo anterior, pelo próprio Postman é possível verificar os resultados dos testes.
