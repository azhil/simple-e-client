import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as MessagesSelectors from 'selectors/messages';

const MessageInfoWrapper = styled.div`
    padding: 15px;
    margin-bottom: 15px;

    background-color: lightyellow;
`;

const MessageContentWrapper = styled.div`
    padding: 15px;
    margin-top: 15px;

    font-size: 24px;
    font-weight: normal;

    color: black;
    opacity: 0.75;
`;

const ThereIsNoMessage = styled.div`
    font-size: 24px;
    font-weight: bold;

    color: darkgrey;

    text-align: left;

    padding: 15px;
`;

const BaseInfoText = styled.span`
    color: lightgrey;

    font-size: 20px;
    font-weight: normal;
`;

const InfoText = styled.span`
    color: lightgrey;

    font-size: 20px;
    font-weight: bold;
`;

class MessageContent extends Component {
    render() {
        const { sender, subject, timeSent, message } = this.props;

        if (!message) {
            return (
                <ThereIsNoMessage>
                    There is no message selected
                </ThereIsNoMessage>
            );
        }

        return (
            <div>
                <MessageInfoWrapper>
                    <div>
                        <BaseInfoText>subject: </BaseInfoText>
                        <InfoText>{subject}</InfoText>
                    </div>
                    <div>
                        <BaseInfoText>from: </BaseInfoText>
                        <InfoText>{sender}</InfoText>
                    </div>
                    <div>
                        <BaseInfoText>at: </BaseInfoText>
                        <InfoText>{timeSent}</InfoText>
                    </div>
                </MessageInfoWrapper>
                <MessageContentWrapper>{message}</MessageContentWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state, { id }) => ({
    sender: MessagesSelectors.getSender(id)(state),
    subject: MessagesSelectors.getSubject(id)(state),
    timeSent: MessagesSelectors.getTimeSent(id)(state),
    message: MessagesSelectors.getContent(id)(state)
});

export default connect(mapStateToProps)(MessageContent);
