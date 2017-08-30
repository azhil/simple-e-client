import React from 'react';
import { Redirect } from 'react-router-dom';

import Messages from 'pages/messages';

const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to='/messages' push={false} />
    },
    {
        path: '/messages/:id?',
        exact: true,
        component: Messages
    }
];

export default routes;