import { css } from 'styled-components'
import { breakpoints } from 'app/theme';

export default Object.keys(breakpoints).reduce((media, label) => {
    media[label] = (...args) => css`
        @media screen and (min-width: ${breakpoints[label]}px) {
            ${css(...args)}
        }
    `;

    return media
}, {});