import { css } from 'styled-components';

export default ['margin', 'padding'].reduce((spacing, type) => {
    const basicSpacing = ['Top', 'Right', 'Bottom', 'Left'].reduce((basic, direction) => ({
        ...basic,
        [`${type}${direction}`]: offset => css`${type}-${direction.toLowerCase()}: ${offset}`
    }), {});

    return {
        ...spacing,
        ...basicSpacing,
        [`${type}`]: (
            top = 0,
            right = top,
            bottom = top,
            left = typeof right === 'undefined'
                ? top
                : right
        ) => css`
            ${basicSpacing[`${type}Top`](top)};
            ${basicSpacing[`${type}Right`](right)};
            ${basicSpacing[`${type}Bottom`](bottom)};
            ${basicSpacing[`${type}Left`](left)};
        `
    }
}, {});
