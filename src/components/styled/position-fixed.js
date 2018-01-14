import styled from 'styled-components';
import isUndefined from 'lodash/isUndefined';

export default styled.div`
    position: fixed;

    ${({ top }) => !isUndefined(top) && `top: ${top}`};
    ${({ right }) => !isUndefined(right) && `right: ${right}`};
    ${({ bottom }) => !isUndefined(bottom) && `bottom: ${bottom}`};
    ${({ left }) => !isUndefined(left) && `left: ${left}`};

    z-index: ${({ zIndex = 10 }) => zIndex};

    ${({ width }) => !isUndefined(width) && `width: ${width}`};
    ${({ height }) => !isUndefined(height) && `height: ${height}`};
`;
