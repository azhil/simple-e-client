import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';

import navigateToRootAfterMessageDeleted from 'middleware/navigate-to-root-after-message-deleted';
import updateMessageWhenNavigatedTo from 'middleware/update-message-when-navigated-to';

import reducers from 'reducers';

import history from './history';

const composeEnhancers = (
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const store = createStore(
    reducers
    , composeEnhancers(
        applyMiddleware(
            thunkMiddleware,
            navigateToRootAfterMessageDeleted,
            updateMessageWhenNavigatedTo,
            routerMiddleware(history)
        )
    )
);

export default store;
