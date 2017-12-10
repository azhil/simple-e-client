import { createSelector } from 'reselect'
import moment from 'moment';

export const getList = state => state.messages.list;
export const getIndexedList = state => state.messages.indexedList;

export const getMessage = id => state => getIndexedList(state)[id] || {};

export const getSender = id => state => {
    const { sender } = getMessage(id)(state);
    return sender;
}

export const getSubject = id => state => {
    const { subject } = getMessage(id)(state);
    return subject;
}

export const getContent = id => state => {
    const { message } = getMessage(id)(state);
    return message;
}

export const getTimeSent = id => state => {
    const { time_sent } = getMessage(id)(state);
    return moment(time_sent * 1000).format('ddd DD MMMM, HH:mm');
}

export const getIsViewed = id => state => {
    const { isViewed } = getMessage(id)(state);
    return isViewed;
}

export const getNotViewed = createSelector(
    getList,
    getIndexedList,
    (list, indexedList) => list.reduce((accumulator, id) => {
        if (id in indexedList && !indexedList[id].isViewed) {
            accumulator += 1;
        }

        return accumulator;
    }, 0)
)
