# mikaleb-blog

Colors:

- `#00c1f5`
- `#fe7f2d`
- `#fefcfd`
- `#06d6a0`
- `#233d4d`

<table>
    <tr>
        <th>Color</th>
        <th>Name</th>
    </tr>
    <tr>
        <td style="background-color: #00c1f5;">#00c1f5</td>
        <td>aero</td>
    </tr>
    <tr>
        <td style="background-color: #fe7f2d;">#fe7f2d</td>
        <td>pumpkin</td>
    </tr>
    <tr>
        <td style="background-color: #fefcfd; color: black;">#fefcfd</td>
        <td>white</td>
    </tr>
    <tr>
        <td style="background-color: #06d6a0;">#06d6a0</td>
        <td>emerald</td>
    </tr>
    <tr>
        <td style="background-color: #233d4d;">#233d4d</td>
        <td>charcoal</td>
    </tr>
</table>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
