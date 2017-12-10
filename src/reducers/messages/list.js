import * as MessagesActionTypes from 'action-types/messages';

export default (state = [], action) => {
    switch(action.type) {
        case MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS:
            return action.payload.messages.map(message => message.uid);

        case MessagesActionTypes.MESSAGES_DELETE_SUCCESS: {
            const { id } = action.payload;
            if (state.includes(id)) {
                const nextState = [ ...state ];

                nextState.splice(nextState.indexOf(id), 1);

                return nextState;
            }

            return state;
        }
        
        default:
            return state;
    }
}
