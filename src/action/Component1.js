import * as consts from "../consts";

export function counter_plus(incr) {
    return {
        type: consts.COMPONENT1_COUNTER_PLUS,
        incr: incr,
    };
}