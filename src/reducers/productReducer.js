import {
    GET_PRODUCTS,
    SORT_PRODUCTS,
    FILTER_PRODUCTS,

} from "../actions/types";

const initialState = {
    products: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        case SORT_PRODUCTS: {
            return {
                ...state,
                products: payload
            }
        }
        case FILTER_PRODUCTS: {
            return {
                ...state,
                products: payload
            }
        }
        default:
            return state;
    }
}
