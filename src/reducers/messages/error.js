import * as MessagesActionTypes from 'action-types/messages';

export default (state = {}, action) => {
    switch(action.type) {
        case MessagesActionTypes.MESSAGES_REQUEST_ALL:
        case MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS:
            return {
                '_root': {}
            };
        case MessagesActionTypes.MESSAGES_REQUEST_ALL_FAILURE:
            return {
                '_root': action.payload.error
            };
        
        default:
            return state;
    }
}