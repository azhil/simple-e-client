import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as actionTypes from 'action-types/messages';
import * as actions from './messages';

import { RAW_DATA as MESSAGES } from 'constants/config';

const middlewares = [ thunkMiddleware ];
const mockStore = configureMockStore(middlewares);

describe('messages actions', () => {

    beforeEach(function () {
        global.fetch = require('jest-fetch-mock');
    });

    afterEach(function () {
        fetch.resetMocks();
    });

    it('gets all the messages', async () => {
        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify(MESSAGES),
            { status: 200 }
        );

        const expectedActions = [
            { type: actionTypes.MESSAGES_REQUEST_ALL },
            { type: actionTypes.MESSAGES_REQUEST_ALL_SUCCESS, payload: { messages: MESSAGES } }
        ];

        const store = mockStore({});

        await store.dispatch(actions.getAll());

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('updates message with the specified id', async () => {
        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const expectedActions = [
            { type: actionTypes.MESSAGES_UPDATE },
            {
                type: actionTypes.MESSAGES_UPDATE_SUCCESS,
                payload: {
                    id: 1,
                    message: {
                        text: 'Hello, World!'
                    }
                }
            }
        ];

        const store = mockStore({});

        await store.dispatch(actions.put(1, { text: 'Hello, World!' }));

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('deletes message with the specified id', async () => {
        const successfulFetch = fetch.mockResponseOnce(
            JSON.stringify({}),
            { status: 200 }
        );

        const expectedActions = [
            { type: actionTypes.MESSAGES_DELETE },
            { type: actionTypes.MESSAGES_DELETE_SUCCESS, payload: { id: 1 } }
        ];

        const store = mockStore({});

        await store.dispatch(actions.del(1));

        expect(store.getActions()).toEqual(expectedActions);
    });
});
