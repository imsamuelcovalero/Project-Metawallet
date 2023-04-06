# Bem-vindo ao projeto MetaWallet

Metawallet é uma aplicação desenvolvida em React.js para controle de gastos pessoais. Nela, é possível fazer login e adicionar despesas com valor, descrição, moeda, método de pagamento e tag/tipo de despesa. As despesas contam com um valor de câmbio atualizado no momento da adição pela API e um valor convertido para Real (BRL). Além disso, é possível editar a descrição, tag, método de pagamento, valor e moeda da despesa. No header, é exibido o valor total das despesas.
> - Veja o post sobre a aplicação [no LinkedIn aqui.](https://www.linkedin.com/posts/samuelcovalero_trybe-frontend-redux-activity-6957346599509323777-_uEj?utm_source=share&utm_medium=member_desktop)
> - Acesse o [deploy da aplicação aqui](https://project-trybewallet-drab.vercel.app/)
<details>
<summary>Informações para utilizar a aplicação no deploy</summary><br>
 
 - Para logar, o email deve estar no padrão `user@email.com`, e a senha ter mais do que `6 caracteres`.
 
</details>

## Sumário
- [Bem-vindo ao projeto Metawallet](#bem-vindo-ao-projeto-metawallet)
- [Visualização](#visualização)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Notas](#notas)
 - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
 - [Lint](#lint)
 
## Visualização

<div align="center">

![metawallet2](https://user-images.githubusercontent.com/98184355/230403347-776cd48a-3668-4a37-8e2a-3feb82691299.gif)

</div>

## Contexto
A __aplicação Metawallet__ é uma ferramenta de controle financeiro que permite que o usuário:
 - Faça login e cadastre novas despesas com valor, descrição, moeda, método de pagamento e tag/tipo de despesa.
 - Adicione um valor de câmbio para as despesas com moedas diferentes do Real (BRL), obtido no momento da adição pela API de economia/cotações.
 - Converta automaticamente o valor da despesa para Real (BRL).
 - Edite a descrição, tag, método de pagamento, valor e moeda da despesa.
 - Visualize o valor total das despesas no header.

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [React.js com classes](https://reactjs.org/docs/getting-started.html) | Biblioteca para criar interfaces de usuário.
- [Styled Components](https://styled-components.com/) | Biblioteca para estilização do CSS.
- [API de economia/cotações](https://economia.awesomeapi.com.br/json/all) | API utilizada para obter informações sobre cotações de moedas e criptomoedas.
- [Redux](https://redux.js.org/) | Biblioteca de gerenciamento de estado.

O React.js foi escolhido por ser uma das bibliotecas mais populares e amplamente utilizadas para criar interfaces de usuário. Além disso, ele oferece suporte a programação orientada a objetos, o que é importante para o desenvolvimento de projetos maiores. O Styled Components foi escolhido porque permite que os desenvolvedores escrevam o CSS em formato de componente, o que torna o código mais legível e fácil de entender. A API de economia/cotações foi utilizada para obter informações atualizadas sobre cotações de moedas e criptomoedas, fornecendo informações precisas e detalhadas. O Redux foi utilizado para gerenciar o estado global da aplicação, tornando mais fácil a comunicação entre diferentes componentes e permitindo uma melhor organização do código.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:imsamuelcovalero/Project-Metawallet.git
```
### Instalar dependências
```
cd Project-Metawallet
npm install
```
### Rodar a aplicação
```
cd Project-Metawallet
npm start
```

## Notas
### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).
