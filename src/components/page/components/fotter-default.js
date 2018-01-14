import React from 'react';
import styled from 'styled-components';

import { HEIGHT_FOOTER } from 'constants/config';

import * as Theme from 'app/theme';

import { TextBig } from 'components/styled/text';

import spacing from 'utils-css/spacing';

const FooterDefaultInnerWrapper = styled.div`
    ${spacing.padding(0, Theme.spacing.normal)};

    background-color: ${Theme.colors.lighterGrey};

    text-align: right;
`;

export default () => (
    <FooterDefaultInnerWrapper>
        <TextBig color={Theme.colors.darkGrey} line={`${HEIGHT_FOOTER}px`}>
            simple e-mail client
        </TextBig>
    </FooterDefaultInnerWrapper>
);
