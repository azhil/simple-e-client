import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { HEIGHT_FOOTER } from 'constants/config';

import PositionFixed from 'components/styled/position-fixed';

const Footer = props => (
    <PositionFixed
        {...props}

        right={0}
        bottom={0}
        left={0}

        height={`${HEIGHT_FOOTER}px`}
    />
);

export default styled(Footer)`
    background-color: ${Theme.colors.lighterGrey};

    border-top: 1px solid ${Theme.colors.darkGrey};

    box-sizing: border-box;
`;
