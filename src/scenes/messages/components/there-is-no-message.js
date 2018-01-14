import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { TextLarge } from 'components/styled/text';

import spacing from 'utils-css/spacing';

const ThereIsNoMessageInnerWrapper = styled.div`
    ${spacing.padding(Theme.spacing.normal)};

    text-align: left;
`;

export default () => (
    <ThereIsNoMessageInnerWrapper>
        <TextLarge color={Theme.colors.darkGrey} bold>
            There is no message selected
        </TextLarge>
    </ThereIsNoMessageInnerWrapper>
);
