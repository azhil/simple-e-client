import * as NavigationMenuActionTypes from 'action-types/navigation-menu';
import isShownReducer, { DEFAULT_STATE } from './is-shown';

describe('testing "is-shown" reducer', () => {
    it('should return default state', () => {
        expect.assertions(2);

        expect(isShownReducer(DEFAULT_STATE, {})).toBe(DEFAULT_STATE);
        expect(isShownReducer()).toBe(DEFAULT_STATE);
    });

    it('should handle "SHOW_MENU"', () => {
        const action = { type: NavigationMenuActionTypes.SHOW_MENU };
        expect(isShownReducer(false, action)).toBe(true);
    });

    it('should handle "HIDE_MENU"', () => {
        const action = { type: NavigationMenuActionTypes.HIDE_MENU };
        expect(isShownReducer(true, action)).toBe(false);
    });
});
