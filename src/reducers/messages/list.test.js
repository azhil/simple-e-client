import * as MessagesActionTypes from 'action-types/messages';
import listReducer, { DEFAULT_STATE } from './list';

describe('testing "list" reducer', () => {

    it('should return default state', () => {
        expect.assertions(2);

        expect(listReducer(DEFAULT_STATE, {})).toEqual(DEFAULT_STATE);
        expect(listReducer()).toEqual(DEFAULT_STATE);
    });

    it('should handle "MESSAGES_REQUEST_ALL_SUCCESS"', () => {
        const action = {
            type: MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS,
            payload: {
                messages: [
                    { uid: 1 },
                    { uid: 2 },
                    { uid: 3 }
                ]
            }
        };

        expect(listReducer([], action)).toEqual([1, 2, 3]);
    });

    it('should handle "MESSAGES_DELETE_SUCCESS"', () => {
        expect.assertions(2);

        const action = {
            type: MessagesActionTypes.MESSAGES_DELETE_SUCCESS,
            payload: { id: 1 }
        };

        expect(listReducer([], action)).toEqual([]);
        expect(listReducer([1, 2], action)).toEqual([2]);
    });
});
