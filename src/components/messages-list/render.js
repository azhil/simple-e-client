import React, { Component } from 'react';

import MessagesListItemContainer from 'components/messages-list-item';

import List from './components/list';
import ListItem from './components/list-item';
import NavigationLink from './components/navigation-link';
import ThereAreNoMessages from './components/there-are-no-messages';

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
                <ThereAreNoMessages />
            );
        }

        return <List>{this.props.list.map(this.renderListItem)}</List>;
    }
}
