import React, { Fragment, Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import FooterDefault from './components/fotter-default';
import Container from './components/container';

import HeaderMessages from './components/route-related/messages/header-messages';
import NavigationMenu from './components/route-related/messages/navigation-menu';

class Page extends Component {
    render() {
        return (
            <Fragment>
                <NavigationMenu />
                <Header>
                    <Switch>
                        <Route path="/" component={null} exact />
                        <Route path="/messages" component={HeaderMessages} />
                    </Switch>
                </Header>
                <Content>
                    <Container>
                        {React.Children.only(this.props.children)}
                    </Container>
                </Content>
                <Footer>
                    <FooterDefault />
                </Footer>
            </Fragment>
        );
    }
}

export default withRouter(Page);
