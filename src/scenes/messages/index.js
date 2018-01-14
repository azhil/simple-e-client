import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import * as MessagesActions from 'actions/messages';

import MessagesListContainer from 'components/messages-list';
import MessageContent from './components/message-content';

import Sidebar from './components/sidebar';
import Content from './components/content';
import ThereIsNoMessage from './components/there-is-no-message';

class Messages extends Component {
    componentWillMount() {
        this.props.onFetchAllMessages();
    }

    render() {
        const { match: { url } } = this.props;

        return (
            <Fragment>
                <Sidebar>
                    <MessagesListContainer />
                </Sidebar>
                <Content>
                    <Switch>
                        <Route path={`${url}/`} component={ThereIsNoMessage} exact />
                        <Route path={`${url}/:id`} component={MessageContent} />
                    </Switch>
                </Content>
            </Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onFetchAllMessages: () => dispatch(MessagesActions.getAll())
});

export default connect(null, mapDispatchToProps)(Messages);
