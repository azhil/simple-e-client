import * as MessagesActionTypes from 'action-types/messages';

import { RAW_DATA as MESSAGES } from 'constants/config';

import { dummyGet, dummyPut, dummyDel } from 'utils/request';

const requestAllMessages = () => ({
    type: MessagesActionTypes.MESSAGES_REQUEST_ALL
});

const requestAllMessagesSuccess = messages => ({
    type: MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS,
    payload: {
        messages
    }
});

export const getAll = () => async (dispatch) => {
    dispatch(requestAllMessages());

    await dummyGet('messages');

    dispatch(requestAllMessagesSuccess(MESSAGES));
};

const updateMessage = id => ({
    type: MessagesActionTypes.MESSAGES_UPDATE
});

const updateMessageSuccess = (id, message) => ({
    type: MessagesActionTypes.MESSAGES_UPDATE_SUCCESS,
    payload: {
        id,
        message
    }
});

export const put = (id, params) => async dispatch => {
    dispatch(updateMessage(id));

    const message = await dummyPut(`messages/${id}`, params);

    dispatch(updateMessageSuccess(id, message));
};

const deleteMessage = id => ({
    type: MessagesActionTypes.MESSAGES_DELETE
});

const deleteMessageSuccess = id => ({
    type: MessagesActionTypes.MESSAGES_DELETE_SUCCESS,
    payload: {
        id
    }
});

export const del = id => async dispatch => {
    dispatch(deleteMessage(id));

    await dummyDel(`messages/${id}`);

    dispatch(deleteMessageSuccess(id));
};
