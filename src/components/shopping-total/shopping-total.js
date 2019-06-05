import './shopping-total.scss';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Card, Button, message} from 'antd';
import { formatter } from '../../utils/utils.js';
import { getShoppingCartTotals, buyShoppingCart } from '../../actions/shoppingCartActions.js';

message.config({
    top: 90,
    duration: 5,
    maxCount: 3,
});

export class ShoppingTotal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentWillMount() {
        this.getShoppingCartTotals();
    }

    getShoppingCartTotals = () => {
        this.props.getShoppingCartTotals();
    }

    buyShoppingCart = () => {
        const { items } = this.props;
        message.success(`Felicidades! Tus ${items} productos ya se encuentran en camino a tu hogar!`);
        this.props.buyShoppingCart();
    }


    render() {
        const { items, amount } = this.props;

        return (
            <Card className="shopping-total" title={`Subtotal (${items} productos): ${formatter.format(amount)}`} >
                <Button disabled={items === 0} size="large" type="primary" onClick={ () => this.buyShoppingCart() }>Comprar</Button>
            </Card>
        );
    }

}

const mapStateToProps = state => ({
    items: state.shoppingCartReducer.items,
    amount: state.shoppingCartReducer.amount
});

export default connect(
    mapStateToProps,
    { getShoppingCartTotals, buyShoppingCart }
)(ShoppingTotal);
