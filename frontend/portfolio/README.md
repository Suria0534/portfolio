# Suria Sultana Portfolio

Personal portfolio for Suria Sultana, a final-semester CSE student at BRAC University focused on software engineering, AI/ML, and data science.

## Development

```bash
npm install
npm run dev
```

The app is configured to run on a public host and uses a stable Vite port for local previews and deployment testing.

## Deployment

This portfolio is ready to be deployed as a static site on Vercel, Netlify, GitHub Pages, or similar hosts.

1. Push the frontend project to your hosting provider.
2. Set the build command to:

```bash
npm run build
```

3. Set the publish/output directory to:

```bash
dist
```

4. If you are using a custom domain or a production environment, keep the app at the root route and make sure the assets are served relative to the project.

## Production build

```bash
npm run build
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
