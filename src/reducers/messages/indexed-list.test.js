import * as MessagesActionTypes from 'action-types/messages';
import indexedListReducer, { DEFAULT_STATE } from './indexed-list';

describe('testing "indexed-list" reducer', () => {
    it('should return default state', () => {
        expect.assertions(2);

        expect(indexedListReducer(DEFAULT_STATE, {})).toEqual(DEFAULT_STATE);
        expect(indexedListReducer()).toEqual(DEFAULT_STATE);
    });

    it('should handle "MESSAGES_REQUEST_ALL_SUCCESS"', () => {
        expect.assertions(3);

        const action = {
            type: MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS,
            payload: {
                messages: [{ uid: 1 }, { uid: 2 }, { uid: 3 }]
            }
        };

        expect(indexedListReducer({}, action)).toEqual({
            1: { uid: 1 },
            2: { uid: 2 },
            3: { uid: 3 }
        });

        expect(indexedListReducer({ 2: { uid: 2 } }, action)).toEqual({
            1: { uid: 1 },
            2: { uid: 2 },
            3: { uid: 3 }
        });

        expect(indexedListReducer({ 4: { uid: 4 } }, action)).toEqual({
            1: { uid: 1 },
            2: { uid: 2 },
            3: { uid: 3 },
            4: { uid: 4 }
        });
    });

    it('should handle "MESSAGES_UPDATE_SUCCESS"', () => {
        expect.assertions(2);

        const action = {
            type: MessagesActionTypes.MESSAGES_UPDATE_SUCCESS,
            payload: { id: 1, message: { text: 'Hello, World!' } }
        };

        expect(indexedListReducer({ 1: { text: 'Oh, wow!' } }, action)).toEqual(
            { 1: { text: 'Hello, World!' } }
        );

        expect(indexedListReducer({ 2: { text: 'Oh, wow!' } }, action)).toEqual(
            { 2: { text: 'Oh, wow!' } }
        );
    });

    it('should handle "MESSAGES_DELETE_SUCCESS"', () => {
        expect.assertions(2);

        const action = {
            type: MessagesActionTypes.MESSAGES_DELETE_SUCCESS,
            payload: { id: 1 }
        };

        expect(indexedListReducer({ 1: {} }, action)).toEqual({});
        expect(indexedListReducer({ 2: {} }, action)).toEqual({ 2: {} });
    });
});
