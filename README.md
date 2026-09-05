https://jeffersonaraujo-dev.github.io/PagePassarinho/
# 🐦 Graúna do Biludos

> Uma página web dedicada à **Graúna (Gnorimopsar chopi)**, destacando sua beleza, características, habitat e, principalmente, seu marcante canto.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge\&logo=github\&logoColor=white)](https://pages.github.com/)

---

## 🌐 Demonstração

Acesse o projeto publicado:

### 👉 [Graúna do Biludos — Página Online](https://jeffersonaraujo-dev.github.io/PagePassarinho/)

---

## 📖 Sobre o projeto

**Graúna do Biludos** é um projeto web criado para apresentar informações e imagens da graúna brasileira de maneira visual, simples e responsiva.

A página foi desenvolvida com foco em:

* Design moderno e responsivo;
* Organização semântica do HTML;
* Experiência de navegação agradável;
* Apresentação visual da espécie;
* Animações durante a navegação;
* Galeria interativa;
* Contato direto pelo WhatsApp.

O projeto apresenta a espécie **Gnorimopsar chopi**, conhecida popularmente como graúna ou pássaro-preto, abordando aspectos como sua plumagem, canto, habitat e alimentação.

---

## ✨ Funcionalidades

### 🏠 Página inicial

Uma seção principal apresenta o projeto e introduz a proposta da página:

> **"O encanto do canto brasileiro"**

Com botões de navegação para conhecer a espécie e acessar a galeria.

### 🐦 Sobre a Graúna

Seção dedicada à apresentação da espécie, contendo:

* Nome científico;
* Informações gerais;
* Características visuais;
* Destaque para sua vocalização.

### 🎵 Características

O projeto apresenta algumas das principais características da graúna:

* 🎵 Canto marcante;
* 🖤 Plumagem;
* 🌳 Habitat;
* 🌱 Alimentação.

### 🖼️ Galeria

A página possui uma galeria com imagens da graúna.

As imagens podem ser **clicadas para serem ampliadas**, utilizando um sistema de *lightbox* desenvolvido em JavaScript.

### ✨ Animações

Elementos da página possuem animações acionadas conforme o usuário percorre a página.

Para isso, o projeto utiliza a API `IntersectionObserver` do navegador.

### 💬 WhatsApp

Existem botões de contato que direcionam o visitante para uma conversa através do WhatsApp.

---

## 🛠️ Tecnologias utilizadas

### Front-end

* **HTML5**
* **CSS3**
* **JavaScript**

### Recursos utilizados

* HTML semântico;
* CSS responsivo;
* CSS Grid/Flexbox;
* Animações CSS;
* JavaScript DOM;
* `IntersectionObserver`;
* Lightbox desenvolvido em JavaScript;
* Navegação por âncoras;
* Integração com WhatsApp.

O projeto possui também um `package.json` configurado com **Express**, **Mongoose** e **Nodemon**, embora a experiência principal do projeto seja a página web estática.

---

## 📂 Estrutura do projeto

```text
PagePassarinho/
│
├── assets/
│   └── img/
│       ├── grauna-1.jpg
│       ├── grauna-2.jpg
│       ├── grauna-3.jpg
│       └── grauna-4.jpg
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── src/
│
├── index.html
├── package.json
└── .gitignore
```

A estrutura principal do repositório está organizada separando imagens, estilos, scripts e o documento HTML principal.

---

## 🎨 Seções da página

A página é dividida nas seguintes áreas:

```text
Header
  │
  ├── Início
  ├── Sobre
  ├── Características
  ├── Galeria
  └── Contato
       │
       ▼
Hero
       │
       ▼
Sobre a Graúna
       │
       ▼
Características
       │
       ▼
Destaque
       │
       ▼
Galeria
       │
       ▼
CTA
       │
       ▼
Contato
       │
       ▼
Footer
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/JeffersonAraujo-Dev/PagePassarinho.git
```

### 2. Entre na pasta

```bash
cd PagePassarinho
```

### 3. Abra o projeto

Como a página principal é o arquivo `index.html`, você pode simplesmente abrir o arquivo no navegador.

Também é possível utilizar uma extensão como **Live Server** no VS Code.

---

## 💻 Executando com servidor local

Uma alternativa simples é utilizar um servidor HTTP local.

Por exemplo:

```bash
python3 -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

---

## 📱 Responsividade

O projeto foi desenvolvido pensando em diferentes tamanhos de tela, permitindo sua utilização em:

* 📱 Smartphones;
* 📱 Tablets;
* 💻 Notebooks;
* 🖥️ Desktops.

---

## 🧠 JavaScript

O arquivo `js/script.js` adiciona comportamento e interatividade à página.

Entre os recursos implementados estão:

* Atualização automática do ano no rodapé;
* Animações ao entrar na área visível da página;
* Sistema de lightbox para as imagens;
* Eventos para fechamento do lightbox;
* Interações relacionadas aos links do WhatsApp.

O ano do copyright é obtido dinamicamente através do JavaScript, evitando a necessidade de atualizar manualmente o rodapé a cada ano.

---

## 🖼️ Galeria

A galeria utiliza quatro imagens principais:

```text
grauna-1.jpg
grauna-2.jpg
grauna-3.jpg
grauna-4.jpg
```

Ao clicar em uma imagem, ela é exibida em tamanho ampliado através de um lightbox criado dinamicamente pelo JavaScript.

---

## 🌎 Objetivo

Além de ser um projeto de desenvolvimento web, a proposta é valorizar a fauna brasileira e apresentar a graúna de uma maneira acessível e visual.

> **Conheça, admire e valorize a fauna brasileira.**

---

## 📚 O que este projeto demonstra

Este projeto pode ser utilizado como exemplo de desenvolvimento front-end e demonstra conhecimentos em:

* Estruturação de páginas com HTML5;
* Organização de CSS;
* Design responsivo;
* Manipulação do DOM;
* Eventos JavaScript;
* Animações baseadas em scroll;
* Criação de componentes interativos;
* Galeria de imagens;
* Organização de arquivos;
* Publicação de aplicações web com GitHub Pages.

---

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades que podem ser adicionadas futuramente:

* [ ] Menu mobile com botão hamburguer;
* [ ] Modo claro/escuro;
* [ ] Controle de navegação da galeria;
* [ ] Mais informações sobre a espécie;
* [ ] Reprodução de áudio do canto da graúna;
* [ ] Galeria com filtros;
* [ ] Melhorias de acessibilidade;
* [ ] SEO mais avançado;
* [ ] Otimização das imagens;
* [ ] Testes automatizados;
* [ ] Backend para gerenciamento de conteúdo.

---

## 📄 Licença

Este projeto está disponibilizado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para obter mais informações.

---

## 👨‍💻 Autor

Desenvolvido por **Jefferson Araujo**.

### GitHub

👉 [JeffersonAraujo-Dev](https://github.com/JeffersonAraujo-Dev)

### Projeto

👉 [PagePassarinho](https://github.com/JeffersonAraujo-Dev/PagePassarinho)

---

<p align="center">
  🐦 <strong>Graúna do Biludos</strong>
  <br>
  <em>O encanto do canto brasileiro.</em>
</p>

