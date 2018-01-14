import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { HEIGHT_HEADER } from 'constants/config';

import PositionFixed from 'components/styled/position-fixed';

const Header = props => (
    <PositionFixed
        {...props}
        top={0}
        right={0}
        left={0}
        height={`${HEIGHT_HEADER}px`}
    />
);

export default styled(Header)`
    background-color: ${Theme.colors.lighterGrey};

    border-bottom: 1px solid ${Theme.colors.darkGrey};

    box-sizing: border-box;
`;
