import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import spacing from 'utils-css/spacing';

export default styled(NavLink)`
    ${spacing.padding(Theme.spacing.normal, Theme.spacing.small)};

    text-decoration: none;
    color: black;

    display: block;

    &:hover,
    &.active {
        background-color: lightyellow;
    }
`;
