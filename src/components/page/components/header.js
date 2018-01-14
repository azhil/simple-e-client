import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import media from 'utils-css/media';

import IconList from 'react-icons/lib/fa/list';
import IconClose from 'react-icons/lib/fa/close';

import { HEIGHT_HEADER } from 'constants/config';

import * as NavigationMenuActions from 'actions/navigation-menu';
import * as NavigationMenuSelectors from 'selectors/navigation-menu';
import * as MessagesSelectors from 'selectors/messages';

import BoxRightAligned from 'components/styled/box-right-aligned';

const Flex100Height = styled(Flex)`
    height: 100%;

    background-color: ghostwhite;
    color: darkgrey;

    border-bottom: 1px solid lightgrey;
`;

const BoxMobile = styled(Box)`
    align-self: center;

    padding: 0 15px;

    ${media.tablet`display: none;`};
`;

const NewMessagesText = styled.div`
    line-height: ${HEIGHT_HEADER}px;

    font-size: 20px;
    font-weight: bold;

    padding: 0 15px;
`;

const ICON_STYLE = {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
};

class Header extends Component {
    render() {
        return (
            <Flex100Height>
                <BoxMobile>
                    {this.props.isMenuShown ? (
                        <IconClose
                            style={ICON_STYLE}
                            onClick={this.props.onHideMenu}
                        />
                    ) : (
                        <IconList
                            style={ICON_STYLE}
                            onClick={this.props.onShowMenu}
                        />
                    )}
                </BoxMobile>
                <BoxRightAligned>
                    <NewMessagesText>
                        New messages: {this.props.notViewed}
                    </NewMessagesText>
                </BoxRightAligned>
            </Flex100Height>
        );
    }
}

const mapStateToProps = state => ({
    isMenuShown: NavigationMenuSelectors.getIsShown(state),
    notViewed: MessagesSelectors.getNotViewed(state)
});

const mapDispatchToProps = dispatch => ({
    onShowMenu: () => dispatch(NavigationMenuActions.showMenu()),
    onHideMenu: () => dispatch(NavigationMenuActions.hideMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
