import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

const Text = styled.span`
    ${({ bold }) => bold && `font-weight: bold;`};
    color: ${({ color = Theme.colors.black }) => color};
    font-size: ${({ size = Theme.text.size.regular }) => size};
    line-height: ${({ line = Theme.text.line.regular }) => line};
`;

export const TextTiny = props => (
    <Text size={Theme.text.size.tiny} line={Theme.text.line.tiny} {...props} />
);

export const TextSmall = props => (
    <Text
        size={Theme.text.size.small}
        line={Theme.text.line.small}
        {...props}
    />
);

export const TextRegular = Text;

export const TextBig = props => (
    <Text size={Theme.text.size.big} line={Theme.text.line.big} {...props} />
);

export const TextLarge = props => (
    <Text size={Theme.text.size.large} lin={Theme.text.line.large} {...props} />
);

export default TextRegular;
