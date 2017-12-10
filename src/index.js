import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from './app';

//-- production rendering initialization
if (process.env.NODE_ENV === 'production') {

    const render = Component => {
        ReactDOM.render(
            <Component />,
            document.getElementById('root')
        );
    };

    render(App);

//-- development rendering initialization
} else {

    const AppContainer = require('react-hot-loader').AppContainer;

    const render = Component => {
        ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,
            document.getElementById('root')
        );
    };

    render(App);

    if (module.hot) {
        module.hot.accept('./app', () => {
            render(App)
        });
    }

}
