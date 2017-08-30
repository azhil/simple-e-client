# Project's description

Simple e-mail client coding challenge

# Project's structure

* __/__ - root folder ;)
    * __/src__ - sources folder
        * __/action-types__ - folder contains all actions types described as constants
        * __/actions__ - action creators are in here
        * __/app__ - general sources of the application (application component, store, routes, etc.)
        * __/components__ - folder contains global components and components which are used more then once
        * __/constants__ - constants
        * __/middleware__ - redux store middlewares
        * __/pages__ - the only page **messages**
        * __/reducers__ - redux reducers
        * __/selectors__ - redux selectors
        * __/utils__ and __/utils-css__ - js and css utilities accordingly
    * __/templates__ - folder contains html template which is used to produce *index.html*
    * __.babelrc__ - babel transpiler configuration file
    * __package.json__ - project's dependencies
    * __webpack.common.js__ - bundler's common configuration, used both for development and production
    * __webpack.dev.js__ - dev configuration
    * __webpack.prod.js__ - prod configuration

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

Compiles sources and pushes everything into __./www__