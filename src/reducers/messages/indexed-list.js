import * as MessagesActionTypes from 'action-types/messages';

export default (state = {}, action) => {
    switch(action.type) {
        case MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS:
        {
            const messages = action.payload.messages.reduce((messages, message) => {
                messages[message.uid] = message;

                return messages;
            }, {});

            return {
                ...state,
                ...messages
            };
        }

        case MessagesActionTypes.MESSAGES_UPDATE_SUCCESS:
        {
            const { id, message } = action.payload;

            return {
                ...state,
                [id]: message
            };
        }

        case MessagesActionTypes.MESSAGES_DELETE_SUCCESS: {
            const { id } = action.payload;
            if (id in state) {
                const nextState = { ...state };

                delete nextState[id];

                return nextState;
            }

            return state;
        }

        default:
            return state;
    }
}
