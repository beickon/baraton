import './shopping-cart-item.scss';
import React, { Component } from 'react';
import { Popconfirm, Icon, Card, Button, Input } from 'antd';


class ShoppingCartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    handleOnBlur = e => {
        const { value } = e.target;
        const { id, quantity } = this.props.item;

        if(parseInt(value) > quantity) {
            e.target.value = quantity;
        }

        this.props.onCountChange(id, parseInt(e.target.value));
    }

    handleOnConfirm = ({id}) => {
        this.setState({
            loading: true
        });

        this.props.onDelete(id);

        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);

    }

    render() {
        const { item } = this.props;
        const { loading } = this.state;
        const { name, price, count, quantity } = item;

        return (
            <Card loading={loading} className="shopping-cart-item">
                <img alt="" src="../../../assets/images/img.png" width="60"/>
                <div className="description">
                    <h4>{name}</h4>
                    <p>Only {quantity} left!</p>
                    <Popconfirm
                        title="Estas seguro?"
                        onConfirm={() => this.handleOnConfirm(item)}
                        icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                    >
                        <Button type="danger" shape="circle" icon="delete" />
                    </Popconfirm>

                </div>
                <div>
                    <h4>{price}</h4>
                </div>
                <div>
                    <Input defaultValue={count} type="number" min="1" max={quantity} onBlur={this.handleOnBlur} />
                </div>
            </Card>
        );
    }

}

export default ShoppingCartItem;