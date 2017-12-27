import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import MessagesListItemContainer from 'components/containers/messages-list-item';

const List = styled.ul`
    list-style-type: none;

    margin: 0;
    padding: 14px 0;
`;

const ListItem = styled.li``;

const NavigationLink = styled(NavLink)`
    text-decoration: none;

    color: black;

    display: block;

    padding: 5px 10px;

    &:hover,
    &.active {
        background-color: lightyellow;
    }
`;

const ThereAreNoMessages = styled.div`
    font-size: 24px;
    font-weight: bold;

    color: darkgrey;

    padding: 15px;
`;

export default class MessagesList extends Component {
    renderListItem(id) {
        return (
            <ListItem key={id}>
                <NavigationLink to={`/messages/${id}`}>
                    <MessagesListItemContainer id={id} />
                </NavigationLink>
            </ListItem>
        );
    }

    render() {
        const { list } = this.props;

        if (!list.length) {
            return (
                <ThereAreNoMessages>
                    There are no messages in the box
                </ThereAreNoMessages>
            );
        }

        return <List>{this.props.list.map(this.renderListItem)}</List>;
    }
}
