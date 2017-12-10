import * as NavigationMenuActionTypes from 'action-types/navigation-menu';

export default (state = false, action) => {
    switch(action.type) {
        case NavigationMenuActionTypes.SHOW_MENU:
            return true;

        case NavigationMenuActionTypes.HIDE_MENU:
            return false;
        
        default:
            return state;
    }
}
