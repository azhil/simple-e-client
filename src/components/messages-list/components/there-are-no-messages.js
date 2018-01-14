import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { TextLarge } from 'components/styled/text';

import spacing from 'utils-css/spacing';

const ThereAreNoMessagesInnerWrapper = styled.div`
    ${spacing.padding(Theme.spacing.normal)};
`;

export default () => (
    <ThereAreNoMessagesInnerWrapper>
        <TextLarge color={Theme.colors.darkGrey} bold>
            There are no messages in the box
        </TextLarge>
    </ThereAreNoMessagesInnerWrapper>
);
