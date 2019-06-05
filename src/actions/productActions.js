import {
    GET_PRODUCTS,
    SORT_PRODUCTS,
    FILTER_PRODUCTS
} from "./types";
import _ from 'lodash';
import axios from 'axios';

let PRODUCTS;

export const getProducts = (id, name) => dispatch => {
    console.log('id', id)
    console.log('name', name)
    axios.get(`../../../assets/json/products.json`)
        .then(res => {
            PRODUCTS = res.data.products;

            if(name) {
                PRODUCTS = PRODUCTS.filter( product => (product.name === name));
            } else if(id) {
                PRODUCTS = PRODUCTS.filter( product => (product.sublevel_id === id));
            }

            dispatch({ payload: PRODUCTS, type: GET_PRODUCTS });
        })
        .catch(err => {
            console.log("ERR", err);
        });
};

export const sortProducts = (field, sortDir) => dispatch => {
    dispatch({
        payload:
            _.orderBy(PRODUCTS, field === 'price'
                ? product =>  parseFloat(product.price.slice(1))
                : [field],
                [sortDir]),
        type: SORT_PRODUCTS });
}

export const filterProducts = ( field, filter ) => dispatch => {
    dispatch({ payload: _.filter(PRODUCTS, {[field]: filter}), type: FILTER_PRODUCTS });
}

export const filterProductsByRange = ( field, range ) => dispatch => {
    PRODUCTS = PRODUCTS.filter(
        (product) => {
            let value = product[field];

            if(field === 'price') {
                value = parseInt(product.price.slice(1).replace(/,/g, ''), 10);
            }
            return range[0] < value && value < range[1];
        }
    );

    dispatch({ payload: PRODUCTS, type: FILTER_PRODUCTS });
}
