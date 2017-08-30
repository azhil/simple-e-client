import { combineReducers } from 'redux';

import isLoading from './is-loading';
import error from './error';
import indexedList from './indexed-list';
import list from './list';

export default combineReducers({
    isLoading,
    error,
    indexedList,
    list
});