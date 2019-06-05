import {
    GET_SHOPPING_CART,
    ADD_SHOPPING_CART,
    BUY_SHOPPING_CART,
    DELETE_SHOPPING_ITEM,
    UPDATE_SHOPPING_ITEM,
    SHOPPING_ITEMS_TOTALS
} from "../actions/types";

const initialState = {
    items: 0,
    amount: 0,
    shoppingCart: [],
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: payload
            }
        case ADD_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: payload
            }
        case DELETE_SHOPPING_ITEM:
            return {
                ...state,
                shoppingCart: payload
            }
        case UPDATE_SHOPPING_ITEM:
            return {
                ...state,
                shoppingCart: payload
            }
        case SHOPPING_ITEMS_TOTALS:
            return {
                ...state,
                items: payload[0],
                amount: payload[1]
            }
        case BUY_SHOPPING_CART:
            return {
                ...state,
                items: 0,
                amount: 0,
                shoppingCart: []
            }
        default:
            return {
                ...state,
            };
    }
}
