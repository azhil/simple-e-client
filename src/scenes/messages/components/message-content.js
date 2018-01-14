import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as Theme from 'app/theme';
import * as MessagesSelectors from 'selectors/messages';

import { TextBig } from 'components/styled/text';

import spacing from 'utils-css/spacing';

const MessageInfoWrapper = styled.div`
    ${spacing.marginBottom(Theme.spacing.normal)};
    ${spacing.padding(Theme.spacing.normal)};

    background-color: ${Theme.colors.lightYellow};
`;

const MessageContentWrapper = styled.div`
    ${spacing.marginTop(Theme.spacing.normal)};
    ${spacing.padding(Theme.spacing.normal)};
`;

const BaseInfoText = ({ text, ...otherProps }) => (
    <TextBig {...otherProps} color={Theme.colors.lightGrey}>
        {text}
    </TextBig>
);

const InfoText = props => (
    <BaseInfoText {...props} bold />
);

class MessageContent extends Component {
    render() {
        const { sender, subject, timeSent, message } = this.props;

        return (
            <div>
                <MessageInfoWrapper>
                    <div>
                        <BaseInfoText text="subject: " />
                        <InfoText text={subject} />
                    </div>
                    <div>
                        <BaseInfoText text="from: " />
                        <InfoText text={sender} />
                    </div>
                    <div>
                        <BaseInfoText text="at: " />
                        <InfoText text={timeSent} />
                    </div>
                </MessageInfoWrapper>
                <MessageContentWrapper>
                    <TextBig color={Theme.colors.darkGrey}>
                        {message}
                    </TextBig>
                </MessageContentWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state, { match: { params: { id } } }) => ({
    sender: MessagesSelectors.getSender(id)(state),
    subject: MessagesSelectors.getSubject(id)(state),
    timeSent: MessagesSelectors.getTimeSent(id)(state),
    message: MessagesSelectors.getContent(id)(state)
});

export default connect(mapStateToProps)(MessageContent);
