import * as MessagesActionTypes from 'action-types/messages';

export default (state = {}, action) => {
    switch(action.type) {
        case MessagesActionTypes.MESSAGES_REQUEST_ALL:
            return {
                ...state,
                '_root': true
            };
        case MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS:
        case MessagesActionTypes.MESSAGES_REQUEST_ALL_FAILURE:
            return {
                ...state,
                '_root': false
            };

        case MessagesActionTypes.MESSAGES_REQUEST_ONE:
            return {
                ...state,
                [action.payload.id]: true
            };
        case MessagesActionTypes.MESSAGES_REQUEST_ONE_SUCCESS:
        case MessagesActionTypes.MESSAGES_REQUEST_ONE_FAILURE:
            return {
                ...state,
                [action.payload.id]: false
            };

        default:
            return state;
    }
}