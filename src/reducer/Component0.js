import * as consts from "../consts";

const initState = {
    stay: 0,
    timer: 0,
};

function stay_start(state, action) {
    let newState = Object.assign({}, state);
    newState.timer = action.timer;
    return newState;
}

function stay_plus(state, action) {
    let newState = Object.assign({}, state);
    newState.stay = action.stay;
    return newState;
}

function stay_end(state, action) {
    let newState = Object.assign({}, state);
    newState.stay = 0;
    clearInterval(newState.timer);
    newState.timer = 0;
    return newState;
}

export default function Component0(state = initState, action) {
    switch (action.type) {
        case consts.COMPONENT0_STAY_START:
            return stay_start(state, action);
        case consts.COMPONENT0_STAY_PLUS:
            return stay_plus(state, action);
        case consts.COMPONENT0_STAY_END:
            return stay_end(state, action);
        default:
            return state;
    }
}