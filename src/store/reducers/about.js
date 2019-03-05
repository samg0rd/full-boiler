import * as actionTypes from '../actions/actionTypes';
import {
    updateObject
} from '../utility';


// ABOUT CONTAINER INITIAL STATE
const initialState = {
    routerInfo: false,
    reduxInfo: false,
    thunkInfo: false,
    scssInfo: false,
    navigationInfo: false,
    authenticationInfo: false,
    layoutInfo: false
}

// STATE UPDATING FUNCTIONS
const showRouterInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: true,
        reduxInfo: false,
        thunkInfo: false,
        scssInfo: false,
        navigationInfo: false,
        authenticationInfo: false,
        layoutInfo: false
    })
}

const showReduxInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: false,
        reduxInfo: true,
        thunkInfo: false,
        scssInfo: false,
        navigationInfo: false,
        authenticationInfo: false,
        layoutInfo: false
    })
}

const showThunkInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: false,
        reduxInfo: false,
        thunkInfo: true,
        scssInfo: false,
        navigationInfo: false,
        authenticationInfo: false,
        layoutInfo: false
    })
}

const showScssInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: false,
        reduxInfo: false,
        thunkInfo: false,
        scssInfo: true,
        navigationInfo: false,
        authenticationInfo: false,
        layoutInfo: false
    })
}

const showNavigationInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: false,
        reduxInfo: false,
        thunkInfo: false,
        scssInfo: false,
        navigationInfo: true,
        authenticationInfo: false,
        layoutInfo: false
    })
}

const showAuthInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: false,
        reduxInfo: false,
        thunkInfo: false,
        scssInfo: false,
        navigationInfo: false,
        authenticationInfo: true,
        layoutInfo: false
    })
}

const showLayoutInfo = (state, action) => {
    return updateObject(state, {
        routerInfo: false,
        reduxInfo: false,
        thunkInfo: false,
        scssInfo: false,
        navigationInfo: false,
        authenticationInfo: false,
        layoutInfo: true
    })
}

// THE ABOUT CONTAINER REDUCER
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ROUTER_INFO:
            return showRouterInfo(state, action);
        case actionTypes.SHOW_REDUX_INFO:
            return showReduxInfo(state, action);
        case actionTypes.SHOW_THUNK_INFO:
            return showThunkInfo(state, action);
        case actionTypes.SHOW_SCSS_INFO:
            return showScssInfo(state, action);
        case actionTypes.SHOW_NAVIGATION_INFO:
            return showNavigationInfo(state, action);
        case actionTypes.SHOW_AUTH_INFO:
            return showAuthInfo(state, action);
        case actionTypes.SHOW_LAYOUT_INFO:
            return showLayoutInfo(state, action);
        default:
            return state;
    }
}

export default reducer;