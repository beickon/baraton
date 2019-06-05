import { Select } from 'antd';
import React, { Component } from "react";

const { Option, OptGroup } = Select;

class OrderBySelect extends Component {

    render() {
        return (
            <Select
                placeholder="Ordenar por"
                onChange={this.props.onChange}
                style={{ width: 250, paddingBottom: 30 }}
            >
                <OptGroup label="Precio">
                    <Option field="price" sortdir="asc" value="low-high">Menor to Mayor</Option>
                    <Option field="price" sortdir="desc" value="high-low">Mayor to Menor</Option>
                </OptGroup>
                <OptGroup label="Disponibilidad">
                    <Option field="available" sortdir="asc" value="notAvailable-available">No Disponible a Disponible</Option>
                    <Option field="available" sortdir="desc" value="available-notAvailable">Disponible a No Disponible</Option>
                </OptGroup>
                <OptGroup label="Cantidad">
                    <Option field="quantity" sortdir="asc" value="less-more" >Menor a Mayor</Option>
                    <Option field="quantity" sortdir="desc" value="more-less" >Mayor a Menor</Option>
                </OptGroup>
            </Select>
        );
    }
}

export default OrderBySelect;
