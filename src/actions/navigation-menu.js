import * as NavigationMenuActionTypes from 'action-types/navigation-menu';

export const showMenu = () => dispatch => {
    dispatch({
        type: NavigationMenuActionTypes.SHOW_MENU
    });
};

export const hideMenu = () => dispatch => {
    dispatch({
        type: NavigationMenuActionTypes.HIDE_MENU
    });
};