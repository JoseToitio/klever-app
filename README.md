# Klever - Junior Frontend Test

Projeto feito com React, HTML, CSS e JS.

# Instalação
Para instalar as dependencias do projeto, rode o comando abaixo:
```bash
npm install
```
Para abrir o projeto rode:
```bash
npm start
```

## Implementações

- [x] Pagina Home
- [x] Pagina Add token
- [x] Pagina Edit Token

## Desafios propostos e implementados

 - Home
    - [x] Ao clicar no botão "Add Token" vá para a página "Add Token"
    - [x] Ao clicar no ícone "Edit" vá para a página "Edit Token"
 - Add Token
     - [x] O campo Token é obrigatório
     - [x] O campo Balance é obrigatório
     - [x] Ao clicar no botão "Back" vá para a página "Home"
     - Ao clicar no ícone "Save" botão:
       - [x] Salve os dados no localStorage do navegador
       - [x] Navegar o usuário para a página Home
     - Bonus
       - [x] O nome do Token deve ser único, o usuário não deve ter nomes de token repetidos
       - [x] Exibir as mensagens de erro do formulário para o usuário
  - Edit Token
     - [x] Ao clicar no botão "Back" vá para a página "Home"
     - Ao clicar no botão "Save"
       - [x] Salve os dados no localStorage
       - [x] Navegar o usuário para a página Home
     - Ao clicar no botão "Remove"
       - [x] Remova a data do armazenamento local
       - [x] Navegar o usuário para a página Home
     - Bonus
       - [x] Quando o usuário clicar no botão "Remove" deverá exibir um alerta ao usuário para confirmar a remoção.
         - [x] Se confirmado, o token deve ser excluído
         - [x] Se negado, o alerta fecha e o token não deve ser excluído
   - Bônus
     - [x] React Framework
     - [x] Testes Unitários

##  Deploy do Projeto

https://master--legendary-conkies-e6977e.netlify.app/