import {
    GET_MENU,

} from "../actions/types";

const initialState = {
    menu: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_MENU:
            return {
                ...state,
                menu: payload
            };
        default:
            return state;
    }
}
