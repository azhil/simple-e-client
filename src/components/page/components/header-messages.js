import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import * as Theme from 'app/theme';

import media from 'utils-css/media';
import spacing from 'utils-css/spacing';

import IconList from 'react-icons/lib/fa/list';
import IconClose from 'react-icons/lib/fa/close';

import { HEIGHT_HEADER } from 'constants/config';

import * as NavigationMenuActions from 'actions/navigation-menu';
import * as NavigationMenuSelectors from 'selectors/navigation-menu';
import * as MessagesSelectors from 'selectors/messages';

import BoxRightAligned from 'components/styled/box-right-aligned';
import { TextBig } from 'components/styled/text';

const BoxMobile = styled(Flex)`
    ${spacing.padding(0, Theme.spacing.normal)};

    ${media.tablet`display: none;`};
`;

const BoxWithMessages = styled(BoxRightAligned)`
    ${spacing.padding(0, Theme.spacing.normal)};
`;

const ICON_STYLE = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    color: Theme.colors.darkGrey
};

class Header extends Component {
    render() {
        return (
            <Flex>
                <BoxMobile align="center">
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
                <BoxWithMessages>
                    <TextBig
                        color={Theme.colors.darkGrey}
                        line={`${HEIGHT_HEADER}px`}
                        bold
                    >
                        New messages: {this.props.notViewed}
                    </TextBig>
                </BoxWithMessages>
            </Flex>
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
