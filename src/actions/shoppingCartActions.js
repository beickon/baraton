import {
    GET_SHOPPING_CART,
    ADD_SHOPPING_CART,
    BUY_SHOPPING_CART,
    DELETE_SHOPPING_ITEM,
    UPDATE_SHOPPING_ITEM,
    SHOPPING_ITEMS_TOTALS,
} from "./types";
import _ from 'lodash';

let SHOPPING_CART = [];

export const getShoppingCart = () => dispatch => {
    console.log('getShoppingCart')
    SHOPPING_CART = JSON.parse(localStorage.getItem('shopping_cart'));

    if(SHOPPING_CART === null || SHOPPING_CART === undefined) {
        SHOPPING_CART = [];
        localStorage.setItem('shopping_cart', JSON.stringify(SHOPPING_CART));
    }

    dispatch({ payload: SHOPPING_CART, type: GET_SHOPPING_CART });
};

export const addToShoppingCart = (item) => dispatch => {
    const temporalItem = {...item};
    const { id } = temporalItem;
    const index = _.findIndex(SHOPPING_CART, {id});

    if(index === -1) {
        temporalItem['count'] = 1;
        console.log('SHOPPING_CART', SHOPPING_CART)
        SHOPPING_CART.push(temporalItem);
    }else {
        SHOPPING_CART[index]['count']++;
    }

    localStorage.setItem('shopping_cart', JSON.stringify(SHOPPING_CART));

    dispatch({ payload: SHOPPING_CART, type: ADD_SHOPPING_CART });
};

export const deleteShoppingItem = id => dispatch => {
    const index = _.findIndex(SHOPPING_CART, {id});

    if(index !== -1) {
        SHOPPING_CART.splice(index, 1);
    }

    localStorage.setItem('shopping_cart', JSON.stringify(SHOPPING_CART));

    dispatch({ payload: SHOPPING_CART, type: DELETE_SHOPPING_ITEM });
}

export const updateShoppingItemCount = (id, count) => dispatch => {
    const index = _.findIndex(SHOPPING_CART, {id});

    if(index !== -1) {
        SHOPPING_CART[index]['count'] = count;
    }

    localStorage.setItem('shopping_cart', JSON.stringify(SHOPPING_CART));

    dispatch({ payload: SHOPPING_CART, type: UPDATE_SHOPPING_ITEM });
}

export const getShoppingCartTotals = () => dispatch => {
    let items = 0;
    let amount = 0;

    SHOPPING_CART.forEach(({count, price}) => {
        items += count;
        amount += count * parseInt(price.slice(1).replace(/,/g, ''), 10);
    });

    dispatch({ payload: [items, amount], type: SHOPPING_ITEMS_TOTALS });
}

export const buyShoppingCart = () => dispatch => {
    SHOPPING_CART = [];
    localStorage.setItem('shopping_cart', JSON.stringify(SHOPPING_CART));
    dispatch({ payload: SHOPPING_CART, type: BUY_SHOPPING_CART });
}
