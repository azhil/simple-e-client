import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import messages from './messages';
import navigationMenu from './navigation-menu';

export default combineReducers({
    router,
    messages,
    navigationMenu
});
