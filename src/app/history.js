import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory({
    basename: process.env.BASENAME
});

export default history;
