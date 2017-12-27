import { getIsShown } from './navigation-menu';

describe('testing navigation menu selectors', () => {
    it('should return correct visibility state', () => {
        const state = { navigationMenu: { isShown: true } };

        expect(getIsShown(state)).toBe(true);
    });
});
