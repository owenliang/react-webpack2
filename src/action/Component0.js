import * as consts from "../consts";

export function stay_timing() {
    return (dispatch, getState) => {
        let timer = setInterval(() => {
            dispatch({
                type: consts.COMPONENT0_STAY_PLUS,
                stay: getState().Component0.stay + 1,
            });
        }, 1000);

        dispatch({
            type: consts.COMPONENT0_STAY_START,
            timer: timer,
        });
    };
}

export function stay_end() {
    return {
        type: consts.COMPONENT0_STAY_END
    };
}

