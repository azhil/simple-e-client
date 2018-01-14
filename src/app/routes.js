import React from 'react';
import { Redirect } from 'react-router-dom';

import Messages from 'scenes/messages';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/messages" push={false} />
    },
    {
        path: '/messages',
        component: Messages
    }
];

export default routes;
