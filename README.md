# Desafio Angular GitHub API
 ### Desafio 1° proposto pelo colega [Rafael](https://github.com/rpaivabr)do grupo de estudos de frontend.

Sabemos a importância da aplicação se comunicar com APIs externas, muitas delas gratuitas, trazendo benefícios e informação adicional ao projeto.

Usando como referência nossos estudos anteriores com o Weather App (utilizando o WeatherAPI), neste projeto vamos criar uma aplicação que busca por um usuário do github, utilizando o GitHub API, e mostra detalhes sobre o perfil deste usuário.

Precisa mostrar na tela: (url: https://api.github.com/users/<nome_do_usuario>)

- Imagem do avatar (avatar_url)
- Nome de usuário (login)
- Nome (name)
- Link para página do github (html_url)
- Quantidade de seguidores (followers)
- Quantidade de repositórios públicos (public_repos)
- Trazer 4 nome de repositórios (repos_url) utilizando algum critério de busca de sua preferência (mais recentes, mais estrelados, mais forkados)

## Restrições

- [X] Somente utilizar um único componente (app.component.ts)
- [X] Utilizar estilo css próprio e pelo menos um componente do [Bootstrap](https://getbootstrap.com/) (já está importado o css no index.html)
- [X] Utilizar metodo fetch (asíncrono) para requisições HTTP

## Features

- [X] Poder inserir um username do github para pesquisar
- [X] Clicar em um botão de busca (Search) para ter acesso a informação sobre o username
- [X] Ver o avatar, username, nome, quantidade de seguidores e repositórios públicos do username pesquisado
- [ ] Ver os 4 repositórios mais recentes
- [X] Receber uma notificação (alerta) se o usuário for inválido / inexistenteX
## Extra Features

- [ ] Mostrar uma lista de usuários pesquisados (ordenação por critério de sua preferência)
- [ ] Incluir link para perfil do usuário e dos repositórios
- [ ] Mudar filtro dos top 4 repositórios (updated_at / stargazers_count / forks_count)
- [ ] Persistir lista de usuários no último acesso (utilizando local storage por exemplo)

## Links Úteis

To get the data you need to communicate with GitHub API. you can either

- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [API Github User Example](https://api.github.com/users/rpaivabr)
- [API Github User Repositories Example](https://api.github.com/users/rpaivabr/repos)
- [Bootstrap Button Component](https://getbootstrap.com/docs/5.1/components/buttons/)
- [Bootstrap Alert Component](https://getbootstrap.com/docs/5.1/components/alerts/)

To get data from API you can check in javascript

## Projeto para Referência

- [Stackblitz weather-angular](https://stackblitz.com/edit/angular-ivy-fepuhr?file=src%2Fapp%2Fapp.component.ts)

### Visão do Layout final
<a href="#">
    <img src="img/projeto.png" alt="html" style="vertical-align:top; margin:6px 4px">
  </a>

  ### Você pode ver o projeto [aqui.](https://github-angular-dnfr8bolp-lucas-ed.vercel.app/)
