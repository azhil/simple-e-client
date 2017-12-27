import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import navigateToRootAfterMessageDeleted from 'middleware/navigate-to-root-after-message-deleted';
import updateMessageWhenNavigatedTo from 'middleware/update-message-when-navigated-to';

import reducers from 'reducers';

import history from './history';

const composeEnhancers =
    (process.env.NODE_ENV !== 'production' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

let middleware = [
    thunkMiddleware,
    navigateToRootAfterMessageDeleted,
    updateMessageWhenNavigatedTo,
    routerMiddleware(history)
];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, logger];
}

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;
