import configureMockStore from 'redux-mock-store';
import { CALL_HISTORY_METHOD } from 'react-router-redux';

import * as messagesActionTypes from 'action-types/messages';

import navigateToRootAfterMessageDeletedMiddleware from './navigate-to-root-after-message-deleted';

const middlewares = [navigateToRootAfterMessageDeletedMiddleware];
const mockStore = configureMockStore(middlewares);

describe('testing "navigate to root after message deleted" middleware', () => {
    it("should navigate to root if message has been deleted while on it's page", () => {
        const store = mockStore({
            router: { location: { pathname: '/messages/1' } }
        });
        const action = { type: messagesActionTypes.MESSAGES_DELETE_SUCCESS };

        store.dispatch(action);

        expect(store.getActions()).toEqual([
            action,
            {
                type: CALL_HISTORY_METHOD,
                payload: {
                    method: 'push',
                    args: ['/messages']
                }
            }
        ]);
    });

    it('should not navigate anywhere if no message has been deleted', () => {
        const store = mockStore({
            router: { location: { pathname: '/messages' } }
        });
        const action = { type: messagesActionTypes.MESSAGES_DELETE_SUCCESS };

        store.dispatch(action);

        expect(store.getActions()).toEqual([action]);
    });
});
