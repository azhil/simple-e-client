import React from 'react';
import styled from 'styled-components';

import * as Theme from 'app/theme';

const Text = styled.span`
    ${({ bold }) => bold && `font-weight: bold;`};
    color: ${({ color = Theme.colors.black}) => color};
    font-size: ${({ size = Theme.text.size.regular }) => size};
`;

export const TextTiny = props => <Text {...props} size={Theme.text.size.tiny} />;
export const TextSmall = props => <Text {...props} size={Theme.text.size.small} />;
export const TextRegular = Text;
export const TextBig = props => <Text {...props} size={Theme.text.size.big} />;
export const TextLarge = props => <Text {...props} size={Theme.text.size.large} />;

export default TextRegular;
