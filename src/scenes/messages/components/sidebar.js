import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import PositionAbsolute from 'components/styled/position-absolute';

import media from 'utils-css/media';

const Sidebar = PositionAbsolute.extend`
    display: none;

    background-color: ${Theme.colors.lighterGrey};

    overflow-y: auto;

    ${media.tablet`
        display: block;
    `};
`;

export default props => <Sidebar {...props} right="60%" />;
