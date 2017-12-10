import { push } from 'react-router-redux'

import * as MessagesActionTypes from 'action-types/messages';

export default store => next => action => {
    const result = next(action);

    if (action.type === MessagesActionTypes.MESSAGES_DELETE_SUCCESS) {
        const { router } = store.getState();
        const { pathname } = router.location;

        //-- check if we are on a specific message page
        //-- and if we are -> get back to the root
        if (pathname.match(/^\/messages\/\d+$/)) {
            store.dispatch(push('/messages'));
        }
    }

    return result;
}
