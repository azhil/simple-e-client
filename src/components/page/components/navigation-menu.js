import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import { HEIGHT_HEADER, HEIGHT_FOOTER } from 'constants/config';

import * as NavigationMenuActions from 'actions/navigation-menu';
import * as NavigationMenuSelectors from 'selectors/navigation-menu';

import PositionFixed from 'components/styled/position-fixed';
import MessagesListContainer from 'components/messages-list';

import media from 'utils-css/media';

const FixedNavigationMenu = styled(PositionFixed)`
    overflow-y: auto;

    background-color: ${Theme.colors.lighterGrey};

    ${media.tablet`display: none;`};
`;

class NavigationMenu extends Component {
    render() {
        if (!this.props.isMenuShown) return null;

        return (
            <FixedNavigationMenu
                top={`${HEIGHT_HEADER}px`}
                right={0}
                bottom={`${HEIGHT_FOOTER}px`}
                left={0}
                zIndex={20}
                onClick={this.props.onHideMenu}
            >
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
