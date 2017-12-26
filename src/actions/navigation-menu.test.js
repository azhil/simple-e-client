import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import * as actionTypes from 'action-types/navigation-menu';
import * as actions from './navigation-menu';

const middlewares = [ thunkMiddleware ];
const mockStore = configureMockStore(middlewares);

describe('navigation menu actions', () => {

    it('shows menu', async () => {
        const expectedActions = [
            { type: actionTypes.SHOW_MENU }
        ];

        const store = mockStore({});

        await store.dispatch(actions.showMenu());

        expect(store.getActions()).toEqual(expectedActions);
    });

    it('hides menu', async () => {
        const expectedActions = [
            { type: actionTypes.HIDE_MENU }
        ];

        const store = mockStore({});

        await store.dispatch(actions.hideMenu());

        expect(store.getActions()).toEqual(expectedActions);
    });
});
