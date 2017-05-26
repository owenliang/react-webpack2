import * as consts from "../consts";

const initState = {
   counter: 0,
};

function counter_plus(state, action) {
    let nextState = Object.assign({}, state);
    nextState.counter += action.incr;
    return nextState;
}

export default function Component1(state = initState, action) {
    switch (action.type) {
        case consts.COMPONENT1_COUNTER_PLUS:
            return counter_plus(state, action);
        default:
            return state;
    }
}