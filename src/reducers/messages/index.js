import { combineReducers } from 'redux';

import indexedList from './indexed-list';
import list from './list';

export default combineReducers({
    indexedList,
    list
});
