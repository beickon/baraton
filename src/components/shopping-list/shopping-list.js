import { connect } from 'react-redux';
import React, { Component } from 'react';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item.js';
import { getShoppingCart, deleteShoppingItem, updateShoppingItemCount, getShoppingCartTotals } from '../../actions/shoppingCartActions.js';

export class ShoppingList extends Component {

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

    handleDeleteShoppingItem = id => {
        this.props.deleteShoppingItem(id);
        this.getShoppingCart();
        this.props.getShoppingCartTotals();
    }

    handleOnCountChange = (id, count) => {
        this.props.updateShoppingItemCount(id, count);
        this.props.getShoppingCartTotals();
    }

    renderItems = () => {
        const { shoppingCart } = this.props;

        return shoppingCart.map(item => (
            <ShoppingCartItem
                item={item}
                key={item.id}
                onCountChange={this.handleOnCountChange}
                onDelete={this.handleDeleteShoppingItem}
            />
        ))
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCartReducer.shoppingCart
});

export default connect(
    mapStateToProps,
    { getShoppingCart, deleteShoppingItem, updateShoppingItemCount, getShoppingCartTotals }
)(ShoppingList);