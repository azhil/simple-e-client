import * as NavigationMenuActionTypes from 'action-types/navigation-menu';

export const DEFAULT_STATE = false;

export default (state = DEFAULT_STATE, action = {}) => {
    switch(action.type) {
        case NavigationMenuActionTypes.SHOW_MENU:
            return true;

        case NavigationMenuActionTypes.HIDE_MENU:
            return false;

        default:
            return state;
    }
}
