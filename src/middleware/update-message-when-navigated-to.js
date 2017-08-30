import { LOCATION_CHANGE } from 'react-router-redux'
import isEmpty from 'lodash/isEmpty';

import * as MessagesActions from 'actions/messages';
import * as MessagesSelectors from 'selectors/messages';

export default store => next => action => {
    const result = next(action);

    if (action.type === LOCATION_CHANGE) {
        const { pathname } = action.payload;
        const messageIdMatch = pathname.match(/^\/messages\/(\d+)$/);
        const messageId = messageIdMatch && messageIdMatch[1];

        //-- check if we are being navigated to a specific message
        //-- and if we are -> mark that message as already viewed
        if (messageId) {
            const state = store.getState();
            const message = MessagesSelectors.getMessage(messageId)(state);

            if (
                !isEmpty(message)
                && !message.isViewed
            ) {
                store.dispatch(
                    MessagesActions.put(
                        messageIdMatch[1],
                        {
                            ...message,
                            isViewed: true
                        }
                    )
                );
            }
        }
    }

    return result;
}