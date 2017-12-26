import * as MessagesActionTypes from 'action-types/messages';

export const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action = {}) => {
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

            if (id in state) {
                return {
                    ...state,
                    [id]: message
                };
            }

            return state;
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
