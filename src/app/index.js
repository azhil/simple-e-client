import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'

import Page from 'components/page';

import store from './store';
import history from './history';
import routes from './routes';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Page>
                        <Switch>
                            {
                                routes.map((props, index) => (
                                    <Route key={index} {...props} />
                                ))
                            }
                        </Switch>
                    </Page>
                </ConnectedRouter>
            </Provider>
        );
    }
}