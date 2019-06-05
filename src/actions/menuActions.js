import {
    GET_MENU,
} from "./types";
import axios from 'axios';


export const getMenu = () => dispatch => {
    axios.get(`../../../assets/json/categories.json`)
        .then(res => {
            dispatch({ payload: res.data.categories, type: GET_MENU });
        })
        .catch(err => {
            console.log("ERR", err);
        });
};
