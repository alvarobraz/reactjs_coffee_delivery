
<p align="center">
  Aplicação em React/TypeScript - Coffee Delivery, uma loja de entrega de cafés 🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/reactjs_coffee_delivery"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/alvarobraz/">
    <img alt="Made by alvarobraz" src="https://img.shields.io/badge/made%20by-alvarobraz-%237519C1">
  </a>

  <a href="https://github.com/reactjs_coffee_delivery/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/reactjs_coffee_delivery">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/reactjs_coffee_delivery">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#estrutura">Estrurura</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a>
</p>

<br>

## :dart: Sobre ##

Aplicação em ReactJs/TypeScript de venda de cafés on-line!

## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [React.js](https://pt-br.legacy.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [ContextApi](https://legacy.reactjs.org/docs/context.html)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://www.npmjs.com/package/zod)
- [eslint](https://eslint.org/)

## Estrutura ##
```
.
├── index.html
├── LICENSE
├── package.json
├── public
│   ├── arabe.svg
│   ├── cafe_com_leite.svg
│   ├── cafe_latte.svg
│   ├── capuccino.svg
│   ├── chocolate_quente.svg
│   ├── cubano.svg
│   ├── expresso_americano.svg
│   ├── expresso_cremoso.svg
│   ├── expresso_gelado.svg
│   ├── expresso_tradicional.svg
│   ├── havaiano.svg
│   ├── irlandes.svg
│   ├── logo_coffee_delivary.svg
│   ├── macchiato.svg
│   ├── mocaccino.svg
│   └── vite.svg
├── README.md
├── src
│   ├── App.tsx
│   ├── assets
│   │   ├── img_coffee_expresso_americano.svg
│   │   ├── img_coffee_expresso_tradicional.svg
│   │   ├── img_coffee_intro.svg
│   │   ├── img_motoboy_delivery.svg
│   │   ├── logo_coffee_delivary.svg
│   │   └── react.svg
│   ├── components
│   │   ├── App
│   │   │   ├── ButtonCart
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── CounterQuantity
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   └── InfoWrapHome
│   │   │       ├── index.tsx
│   │   │       └── styles.ts
│   │   ├── Checkout
│   │   │   ├── Button
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   └── MyOrder
│   │   │       ├── index.tsx
│   │   │       └── styles.ts
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Home
│   │       ├── CardCoffee
│   │       │   ├── index.tsx
│   │       │   └── style.ts
│   │       ├── CofeeCard
│   │       │   ├── index.tsx
│   │       │   └── style.ts
│   │       └── TypeCoffee
│   │           ├── index.tsx
│   │           └── styles.ts
│   ├── contexts
│   │   └── Context.tsx
│   ├── layouts
│   │   ├── DefaultLayout.tsx
│   │   └── styles.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── Checkout
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── ConfirmOrder
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Home
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── Router.tsx
│   ├── storage
│   │   ├── storageConfig.ts
│   │   ├── storageMyproducts.ts
│   │   └── storageProducts.ts
│   ├── styles
│   │   ├── global.ts
│   │   └── themes
│   │       └── default.ts
│   ├── @types
│   │   └── styled.d.ts
│   ├── utils
│   │   └── index.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

```

## :white_check_mark: Requerimentos ##

- [React](https://react.dev/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/reactjs_coffee_delivery

# Access
$ cd reactjs_coffee_delivery

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:5173>
```
