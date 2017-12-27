import { createSelector } from 'reselect';
import moment from 'moment';

import {
    getList,
    getIndexedList,
    getMessage,
    getSender,
    getSubject,
    getContent,
    getTimeSent,
    getIsViewed,
    getNotViewed
} from './messages';

const STATE = {
    messages: {
        list: [1, 2, 3],
        indexedList: {
            1: {
                uid: 1,
                sender: 'Joe',
                subject: 'foo',
                message: 'bar',
                time_sent: 1459239867,
                isViewed: false
            },
            2: {
                uid: 1,
                sender: 'Barry',
                subject: 'bar',
                message: 'foo',
                time_sent: 1459239867,
                isViewed: false
            },
            3: {
                uid: 1,
                sender: 'Larry',
                subject: 'doe',
                message: 'doe',
                time_sent: 1459239867,
                isViewed: true
            }
        }
    }
};

describe('testing messages selector', () => {
    it('should return messages list', () => {
        expect(getList(STATE)).toBe(STATE.messages.list);
    });

    it('should return messages indexed list', () => {
        expect(getIndexedList(STATE)).toBe(STATE.messages.indexedList);
    });

    it('should return a message', () => {
        expect.assertions(2);

        expect(getMessage(1)(STATE)).toBe(STATE.messages.indexedList['1']);
        expect(getMessage(4)(STATE)).toEqual({});
    });

    it("should return message's properties", () => {
        expect.assertions(5);

        expect(getSender(1)(STATE)).toBe('Joe');
        expect(getSubject(1)(STATE)).toBe('foo');
        expect(getContent(1)(STATE)).toBe('bar');

        expect(getTimeSent(1)(STATE)).toBe(
            moment(STATE.messages.indexedList['1'].time_sent * 1000).format(
                'ddd DD MMMM, HH:mm'
            )
        );

        expect(getIsViewed(1)(STATE)).toBe(false);
    });

    it('should count not viewed messages', () => {
        expect(
            getNotViewed.resultFunc(
                STATE.messages.list,
                STATE.messages.indexedList
            )
        ).toBe(2);
    });
});
