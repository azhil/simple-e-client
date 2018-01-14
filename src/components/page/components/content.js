import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { HEIGHT_HEADER, HEIGHT_FOOTER } from 'constants/config';

import PositionFixed from 'components/styled/position-fixed';

const Content = props => (
    <PositionFixed
        {...props}

        top={`${HEIGHT_HEADER}px`}
        right={0}
        bottom={`${HEIGHT_FOOTER}px`}
        left={0}
    />
);

export default styled(Content)`
    background-color: ${Theme.colors.yellow};
`;
