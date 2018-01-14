import styled from 'styled-components';

export default styled.div`
    position: fixed;

    top: ${({ top = 0 }) => top};
    right: ${({ right = 0 }) => right};
    bottom: ${({ bottom = 0 }) => bottom};
    left: ${({ left = 0 }) => left};
`;
