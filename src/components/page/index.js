import React, { Fragment, Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { HEIGHT_FOOTER } from 'constants/config';

import PositionFixed from 'components/styled/position-fixed';
import { TextBig } from 'components/styled/text';

import spacing from 'utils-css/spacing';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import Container from './components/container';

import HeaderMessages from './components/header-messages';
import NavigationMenu from './components/navigation-menu';

const FooterInnerWrapper = styled.div`
    ${spacing.padding(0, Theme.spacing.normal)};

    background-color: ${Theme.colors.lighterGrey};

    text-align: right;
`;

class Page extends Component {
    render() {
        return (
            <Fragment>
                <NavigationMenu />
                <Header>
                    <HeaderMessages />
                </Header>
                <Content>
                    <Container>
                        {React.Children.only(this.props.children)}
                    </Container>
                </Content>
                <Footer>
                    <FooterInnerWrapper>
                        <TextBig
                            color={Theme.colors.darkGrey}
                            line={`${HEIGHT_FOOTER}px`}
                        >
                            simple e-mail client
                        </TextBig>
                    </FooterInnerWrapper>
                </Footer>
            </Fragment>
        );
    }
}

export default withRouter(Page);
