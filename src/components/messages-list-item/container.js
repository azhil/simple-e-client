import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as MessagesActions from 'actions/messages';
import * as MessagesSelectors from 'selectors/messages';

import MessagesListItem from './render';

const mapStateToProps = (state, { id }) => ({
    sender: MessagesSelectors.getSender(id)(state),
    subject: MessagesSelectors.getSubject(id)(state),
    timeSent: MessagesSelectors.getTimeSent(id)(state),
    isViewed: MessagesSelectors.getIsViewed(id)(state)
});

const mapDispatchToProps = (dispatch, { id }) => ({
    onDelete: () => dispatch(MessagesActions.del(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListItem);
