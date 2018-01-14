import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { HEIGHT_HEADER, HEIGHT_FOOTER } from 'constants/config';

const FixedHeader = styled.div`
    position: fixed;

    left: 0;
    top: 0;
    right: 0;

    height: ${HEIGHT_HEADER}px;

    z-index: 10;
`;

const FixedContent = styled.div`
    position: fixed;

    left: 0;
    top: ${HEIGHT_HEADER}px;
    right: 0;
    bottom: ${HEIGHT_FOOTER}px;

    z-index: 10;

    background-color: antiquewhite;
`;

const FixedFooter = styled.div`
    position: fixed;

    left: 0;
    right: 0;
    bottom: 0;

    height: ${HEIGHT_FOOTER}px;

    z-index: 10;
`;

const Fotter = styled.div`
    background-color: ghostwhite;
    color: darkgrey;

    font-size: 1.15rem;
    font-weight: normal;

    line-height: ${HEIGHT_FOOTER}px;

    text-align: right;

    padding: 0 15px;

    border-top: 1px solid lightgrey;
`;

import Header from './components/header';
import Container from './components/container';
import NavigationMenu from './components/navigation-menu';

class Page extends Component {
    render() {
        return (
            <Fragment>
                <NavigationMenu />
                <FixedHeader>
                    <Header />
                </FixedHeader>
                <FixedContent>
                    <Container>
                        {React.Children.only(this.props.children)}
                    </Container>
                </FixedContent>
                <FixedFooter>
                    <Fotter>simple e-mail client</Fotter>
                </FixedFooter>
            </Fragment>
        );
    }
}

export default withRouter(Page);
