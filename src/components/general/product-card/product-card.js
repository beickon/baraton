import React, { Component } from "react";
import { Card, Badge, Button } from 'antd';

class ProductCard extends Component {

    render() {
        const { name, price, quantity, available, handleAddToCart } = this.props;
        return (
            <div className={'card'}>
                <Badge
                    count={quantity}
                    overflowCount={999}
                    style={{ backgroundColor: available ? '#52c41a' : '#f5222d' }}
                >
                    <Card
                        title={name}
                        size="small"
                        extra={price}
                        hoverable={true}
                        className={ !available && "unavailable"}
                        actions={[<Button disabled={!available} type="primary" size="large" icon="shopping-cart" onClick={ handleAddToCart } >Comprar</Button>]}
                    >
                        <p>{ available ? 'Disponible' : 'No Disponible' }</p>
                    </Card>
                </Badge>
            </div>
        );
    }
}

//TODO validar los props
//TODO crear estilos o usar clase

export default ProductCard;
