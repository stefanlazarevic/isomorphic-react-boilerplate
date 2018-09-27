# fullstack-react-boilerplate
Boilerplate for quick start using React + Redux + React Router + React Helmet + React Google Analytics + SSR + Code Split + Dynamic Route Imports + Long Term Caching + Sass + CSS Modules + Inline Critical CSS

My goal with this experimental repository:

1. Make building React application much faster and prevent common mistakes.

- Use React with static type checker. (Typescript or **Flow**) ✔
- Use code linter to keep code maintainable and consistent. (TSLint or **ESLint**) ✔
- Use .editorconfig so everyone in the team can write code using the same style. ✔
- Use .env to store all environment variables. ✔
- Use Nodemon in development environment to watch all server related files. ✔
- Use Webpack watch and support for Hot Module Replacement. [HMR]

2. Give users only what they asked for.

- Use React Router with dynamic page import. ✔
- Use page loading component to prevent blank page while loading script chunk. ✔
- Use React Lazyload to support component load on scroll.
- Deliver css based on device media.

3. Support Sass for component styling.

- Use sass loader to compile sass/scss to css. ✔
- Use autoprefixer to support css from IE9 forwards. ✔

4. Application is SEO friendly.

- Use Node.js for Server Side Rendering [SSR] ✔
- Server supports HTTPS.
- Server supports GZIP compression. ✔
- Server generate inline critical css style. ✔
- Use React Helmet to provide page specific metadata. ✔

5. Deliver optimized resources.

- Minify css. ✔
- Minify js. ✔
- Minify HTML. ✔
- Support webp image format.
- Reduce image sizes.

6. Application supports Google Analytics [GA].

- Use React GA for Google Analytics support. ✔

7. Application supports offline mode.

8. Application supports global state management.

- Use Redux for global state management. ✔

9. Application supports Unit Tests.

- Use Jest as unit testing library.
- Use code coverages.
- Support Travis CI for continuous integration.

10. Application uses long term cache for assets.

- Long term cache js ✔
- Long term cache css ✔
- Long term cache fonts
- Long term cache images
