import styled from 'styled-components';

import * as Theme from 'app/theme';
import PositionAbsolute from 'components/styled/position-absolute';

import media from 'utils-css/media';

export default PositionAbsolute.extend`
    background-color: ${Theme.colors.lighterGrey};

    overflow-y: auto;

    ${media.tablet`
        left: 40%;

        border-left: 1px solid ${Theme.colors.lightGrey};
    `};
`;
