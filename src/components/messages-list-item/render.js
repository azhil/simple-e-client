import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import IconEye from 'react-icons/lib/fa/eye';
import IconEyeSlash from 'react-icons/lib/fa/eye-slash';
import IconTrash from 'react-icons/lib/fa/trash';

import * as Theme from 'app/theme';

import BoxRightAligned from 'components/styled/box-right-aligned';
import { TextRegular, TextSmall } from 'components/styled/text';

export default class MessagesListItem extends Component {
    handleClickTrashIcon = e => {
        e.preventDefault();
        e.stopPropagation();

        this.props.onDelete();
    };

    render() {
        const { sender, subject, timeSent, isViewed } = this.props;

        return (
            <Flex>
                <Box mr={Theme.spacing.small}>
                    {isViewed ? (
                        <IconEyeSlash color={Theme.colors.lightGrey} />
                    ) : (
                        <IconEye />
                    )}
                </Box>
                <Box mx={Theme.spacing.small} flex="1">
                    <Flex column>
                        <Box mb={Theme.spacing.tiny}>
                            <TextRegular color={Theme.colors.darkerGrey} bold>{sender}</TextRegular>
                        </Box>
                        <Box my={Theme.spacing.tiny}>
                            <TextRegular color={Theme.colors.lightGrey}>{subject}</TextRegular>
                        </Box>
                        <BoxRightAligned mt={Theme.spacing.tiny}>
                            <TextSmall color={Theme.colors.grey}>{timeSent}</TextSmall>
                        </BoxRightAligned>
                    </Flex>
                </Box>
                <BoxRightAligned ml={Theme.spacing.small}>
                    <IconTrash onClick={this.handleClickTrashIcon} />
                </BoxRightAligned>
            </Flex>
        );
    }
}
