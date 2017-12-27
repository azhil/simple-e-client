import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import media from './media';

const DIV = styled.div`
    ${media.mobileS`background-color: white;`};
    ${media.mobileM`background-color: black;`};
    ${media.mobileL`background-color: grey;`};
    ${media.tablet`background-color: yellow;`};
    ${media.computer`background-color: orange;`};
    ${media.screenL`background-color: red;`};
    ${media.screenW`background-color: blue;`};
`;

it('should generate media queries', () => {
    const div = renderer.create(<DIV />).toJSON();

    expect(div).toHaveStyleRule('background-color', 'white', {
        media: 'screen and (min-width:320px)'
    });

    expect(div).toHaveStyleRule('background-color', 'black', {
        media: 'screen and (min-width:375px)'
    });

    expect(div).toHaveStyleRule('background-color', 'grey', {
        media: 'screen and (min-width:425px)'
    });

    expect(div).toHaveStyleRule('background-color', 'yellow', {
        media: 'screen and (min-width:768px)'
    });

    expect(div).toHaveStyleRule('background-color', 'orange', {
        media: 'screen and (min-width:992px)'
    });

    expect(div).toHaveStyleRule('background-color', 'red', {
        media: 'screen and (min-width:1200px)'
    });

    expect(div).toHaveStyleRule('background-color', 'blue', {
        media: 'screen and (min-width:1920px)'
    });
});
