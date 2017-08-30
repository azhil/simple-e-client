import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as MessagesSelectors from 'selectors/messages';

import MessagesList from 'components/messages-list';

const mapStateToProps = state => ({
    list: MessagesSelectors.getList(state)
});

export default withRouter(connect(mapStateToProps)(MessagesList));