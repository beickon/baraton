import { Empty } from 'antd';
import './shopping-cart.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ShoppingList from '../shopping-list/shopping-list.js'
import ShoppingTotal from '../shopping-total/shopping-total.js'
import { getShoppingCart } from '../../actions/shoppingCartActions.js';

export class ShoppingCart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentWillMount() {
        this.getShoppingCart();
    }

    getShoppingCart = () => {
        this.props.getShoppingCart();

        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    }

    render() {
        const {shoppingCart} = this.props;
        return (
            <div className="shopping-cart">
                {shoppingCart.length
                    ? <ShoppingList />
                    : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Carrito vacío"/>
                }
                <ShoppingTotal />
            </div>
        );
    }

}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCartReducer.shoppingCart
});

export default connect(
    mapStateToProps,
    { getShoppingCart }
)(ShoppingCart);