# Project's description

Simple e-mail client coding challenge

# Project's structure

* __/__ - root folder ;)
    * __/src__ - sources folder
    * __/templates__ - folder contains html template which is used to produce *index.html*
    * __.babelrc__ - babel transpiler configuration file
    * __package.json__ - project's dependencies
    * __webpack.common.js__ - bundler's common configuration, used both for development and production
    * __webpack.development.js__ - dev configuration
    * __webpack.production.js__ - prod configuration

# Porject's technologies

*React* (view engine), *Redux* (application state). Expanding styles with *styled-components*. *react-router* as a navigational library.

# Install dependencies

```
npm install
```

# Development

```
npm run dev
```

Compiles sources and starts local development server at __http://localhost:8080__

# Production

```
npm run prod
```

Compiles sources and pushes everything into __./docs__