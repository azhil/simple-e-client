import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import media from 'utils-css/media';

import { HEIGHT_HEADER, HEIGHT_FOOTER } from 'constants/config';

import * as NavigationMenuActions from 'actions/navigation-menu';
import * as NavigationMenuSelectors from 'selectors/navigation-menu';

import MessagesListContainer from 'components/messages-list';

const FixedNavigationMenu = styled.div`
    position: fixed;

    left: 0;
    top: ${HEIGHT_HEADER}px;
    right: 0;
    bottom: ${HEIGHT_FOOTER}px;

    z-index: 20;

    overflow-y: auto;

    background-color: ghostwhite;

    ${media.tablet`display: none;`};
`;

class NavigationMenu extends Component {
    render() {
        if (!this.props.isMenuShown) return null;

        return (
            <FixedNavigationMenu onClick={this.props.onHideMenu}>
                <MessagesListContainer />
            </FixedNavigationMenu>
        );
    }
}

const mapStateToProps = state => ({
    isMenuShown: NavigationMenuSelectors.getIsShown(state)
});

const mapDispatchToProps = dispatch => ({
    onHideMenu: () => dispatch(NavigationMenuActions.hideMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
