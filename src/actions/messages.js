import * as MessagesActionTypes from 'action-types/messages';

import { RAW_DATA as MESSAGES } from 'constants/config';

import { dummyGet, dummyPut, dummyDel } from 'utils/request';

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

const updateMessageFailure = (id, error) => ({
    type: MessagesActionTypes.MESSAGES_UPDATE_FAILURE,
    payload: {
        id,
        error
    }
});

export const put = (id, params) => async (dispatch) => {
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

const deleteMessageFailure = (id, error) => ({
    type: MessagesActionTypes.MESSAGES_DELETE_FAILURE,
    payload: {
        id,
        error
    }
});

export const del = id => async (dispatch) => {
    dispatch(deleteMessage(id));
    
    await dummyDel(`messages/${id}`);

    dispatch(deleteMessageSuccess(id));
};

const requestAllMessages = () => ({
    type: MessagesActionTypes.MESSAGES_REQUEST_ALL
});

const requestAllMessagesSuccess = messages => ({
    type: MessagesActionTypes.MESSAGES_REQUEST_ALL_SUCCESS,
    payload: {
        messages
    }
});

const requestAllMessagesFailure = error => ({
    type: MessagesActionTypes.MESSAGES_REQUEST_ALL_FAILURE,
    payload: {
        error
    }
});

export const getAll = () => async (dispatch) => {
    dispatch(requestAllMessages());

    await dummyGet('messages');

    dispatch(requestAllMessagesSuccess(MESSAGES));
};