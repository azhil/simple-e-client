import configureMockStore from 'redux-mock-store';
import { LOCATION_CHANGE } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

import * as messagesActionTypes from 'action-types/messages';

import updateMessageWhenNavigatedTo from './update-message-when-navigated-to';

const middlewares = [updateMessageWhenNavigatedTo, thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('testing "update message when navigated to" middleware', () => {
    beforeEach(function() {
        global.fetch = require('jest-fetch-mock');
    });

    afterEach(function() {
        fetch.resetMocks();
    });

    it('should update message\'s "isViewed" property when navigated to', async () => {
        fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });

        const store = mockStore({
            messages: {
                indexedList: {
                    1: {
                        isViewed: false
                    }
                }
            }
        });

        const action = {
            type: LOCATION_CHANGE,
            payload: {
                pathname: '/messages/1'
            }
        };

        await store.dispatch(action);

        expect(store.getActions()).toEqual([
            action,
            { type: messagesActionTypes.MESSAGES_UPDATE },
            {
                type: messagesActionTypes.MESSAGES_UPDATE_SUCCESS,
                payload: { id: 1, message: { isViewed: true } }
            }
        ]);
    });

    it("should not update any message's properties when it's not navigated to", () => {
        const store = mockStore({});

        const action = {
            type: LOCATION_CHANGE,
            payload: {
                pathname: '/messages'
            }
        };

        store.dispatch(action);

        expect(store.getActions()).toEqual([action]);
    });

    it('should not update if message was viewed already', () => {
        const store = mockStore({
            messages: {
                indexedList: {
                    1: {
                        isViewed: true
                    }
                }
            }
        });

        const action = {
            type: LOCATION_CHANGE,
            payload: {
                pathname: '/messages/1'
            }
        };

        store.dispatch(action);

        expect(store.getActions()).toEqual([action]);
    });

    it('should not update if message is empty', () => {
        const store = mockStore({ messages: { indexedList: {} } });

        const action = {
            type: 'LOCATION_CHANGE',
            payload: {
                pathname: '/messages/1'
            }
        };

        store.dispatch(action);

        expect(store.getActions()).toEqual([action]);
    });
});
