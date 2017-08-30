import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import IconEye from 'react-icons/lib/fa/eye';
import IconEyeSlash from 'react-icons/lib/fa/eye-slash';
import IconTrash from 'react-icons/lib/fa/trash';

import BoxRightAligned from 'components/styled/box-right-aligned';

const Sender = styled.span`
    color: black;
    opacity: 0.85;

    font-weight: bold;
    font-size: 1rem;
`;

const Subject = styled.span`
    color: darkgrey;
    
    font-weight: normal;
    font-size: 0.95rem;
`;

const TimeSent = styled.span`
    color: black;
    opacity: 0.8;

    font-weight: normal;
    font-size: 0.9rem;
`;

export default class MessagesListItem extends Component {
    handleClickTrashIcon = e => {
        e.preventDefault();
        e.stopPropagation();

        this.props.onDelete();
    }

    render() {
        const { sender, subject, timeSent, isViewed } = this.props;

        return (
            <Flex>
                <Box mr="5px">
                    {
                        isViewed
                            ? <IconEyeSlash color="lightgrey" />
                            : <IconEye color="lightblue" />
                    }
                </Box>
                <Box mx="5px" flex="1">
                    <Flex column>
                        <Box mb="2px"><Sender>{sender}</Sender></Box>
                        <Box my="2px"><Subject>{subject}</Subject></Box>
                        <BoxRightAligned mt="2px"><TimeSent>{timeSent}</TimeSent></BoxRightAligned>
                    </Flex>
                </Box>
                <BoxRightAligned ml="5px">
                    <IconTrash onClick={this.handleClickTrashIcon} />
                </BoxRightAligned>
            </Flex>
        );
    }
}
