<h1 align="center">portfolio-danny-app</h1>

<p align="center">
 <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#iniciar">Iniciar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#telas">Telas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#licenca">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#autor">Autor</a>
</p>

<a id="sobre"></a><br>

## :books: Sobre

Projeto desenvolvido a partir do curso da <a href="https://academy.eincode.com/courses/complete-next-js-with-react-node-beautiful-portfolio-app">Udemy</a>

Criação de um portfólio Next.js Serverless App com possibilidade de incluir blogs.

<a id="tecnologias"></a><br>

## ⚒️ Tecnologias

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- HTML
- CSS Module
- Dentre outras que estão no package.json

<a id="iniciar"></a><br>

## 🚀 Iniciar

```bash
# Criar o arquivo 'env.development.local' na pasta raíz com o seguinte conteúdo:
```
```javascript
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET
AUTH0_REDIRECT_URI=http://localhost:3000/api/v1/callback
AUTH0_POST_LOGOUT_REDIRECT_URI=http://localhost:3000/
AUTH0_COOKIE_SECRET=SOME_UNIQUE_STRING //e.g. asd7ad9879d8a7d89adkabsdhjbasbdas98as7d>?{sd9a87dd8a7d9adad7a8d}
AUTH0_NAMESPACE=YOUR_AUTH0_NAMESPACE
AUTH0_AUDIENCE=YOUR_AUTH0_AUDIENCE

PORTFOLIO_API_URL=http://localhost:3001/api/v1
BASE_URL=http://localhost:3000
```

```bash
# Faça o clone deste repositório para qualquer pasta de sua preferência
$ git clone https://github.com/andrasistemaserp/portfolio-danny-app.git portfolio-danny-app

# Vá até essa pasta
$ cd portfolio-danny-app

# rode esses comandos para instalar as dependências (lembrando que deverá ter o node instalado em sua máquina)
$ yarn install || npm install

# use esses comandos para rodar o Projeto
$ yarn run dev || npm run dev
```

<a id="telas"></a><br>

## 💻 Telas

<img src="/public/prints/home.png" width="700px;">

---

<a id="licenca"></a><br>

## :memo: Licença

Este projeto está sob a licença do MIT. Veja o arquivo [LICENSE](LICENSE) para maiores detalhes.

<a id="contribuir"></a><br>

## 🎯 Como contribuir

- Fork este repositório
- Crie um branch com seu recurso: `git checkout -b meu-recurso`
- Comite suas mudanças: `git commit -m 'recurso: Meus novos recursos'`
- Push seu branch: `git push origin meu-recurso`

<a id="autor"></a><br>

## 🧔 Autor

<img width="10%" height="10%" style="border-radius: 88px" src="https://andraerpwebpub.s3.amazonaws.com/danny-profile.jpg" alt="Danny Andrade" />
<br />
Danny S. Andrade. Entre em contato!
<br />
<br />

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=link_do_seu_perfil_no_github)](https://github.com/andrasistemaserp)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/danny-andrade-11180616b/)](https://www.linkedin.com/company/andra-sistemas)
[![Whatsapp Badge](https://img.shields.io/badge/-Whatsapp-4CA143?style=flat-square&labelColor=4CA143&logo=whatsapp&logoColor=white&link=https://api.whatsapp.com/send?phone=+5519991170194&text=Olá-Danny!)](https://api.whatsapp.com/send?phone=+5519991170194&text=Olá-Danny!)

## :confetti_ball: Este projeto está no ar!

Para ver o projeto funcional acesse <a href="https://portfolio-danny-app.vercel.app/" target="_blank">aqui</a>
