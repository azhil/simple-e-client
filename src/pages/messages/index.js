import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as MessagesActions from 'actions/messages';

import MessagesListContainer from 'components/messages-list';
import MessageContent from './components/message-content';

import media from 'utils-css/media';

const MailBoxSidebar = styled.div`
    display: none;

    ${media.mobileL`
        display: block;

        position: absolute;

        left: 0;
        top: 0;
        right: 60%;
        bottom: 0;

        overflow-y: auto;

        background-color: ghostwhite;
    `};
`;

const MailBoxContent = styled.div`
    position: absolute;

    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    overflow-y: auto;

    background-color: ghostwhite;

    border-left: none;

    ${media.mobileL`
        left: 40%;

        border-left: 1px solid lightgrey;
    `};
`;

class Messages extends Component {
    componentWillMount() {
        this.props.onFetchAllMessages();
    }

    render() {
        const { match } = this.props;

        return (
            <div>
                <MailBoxSidebar>
                    <MessagesListContainer />
                </MailBoxSidebar>
                <MailBoxContent>
                    <MessageContent id={match.params.id} />
                </MailBoxContent>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchAllMessages: () => dispatch(MessagesActions.getAll())
});

export default connect(null, mapDispatchToProps)(Messages);
