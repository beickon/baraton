import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Switch, Avatar, Checkbox } from 'antd';
import FilterSlider from '../slider/filter-slider.js'
import OrderBySelect from '../order-by-select/order-by-select.js'

class FilterBar extends Component {

    render() {
        const {
            total,
            checked,
            handleOnChance,
            handleSwitchChange,
            handleCheckboxChange,
            handlePriceSliderChange,
            handleQuantitySliderChange } = this.props;

        return (
            <div className="filter-bar">
                    <Checkbox
                        checked={checked}
                        onChange={handleCheckboxChange}>Todos</Checkbox>
                    <div>
                        Disponible <Switch
                            defaultChecked
                            onChange={handleSwitchChange}
                        />
                    </div>

                    <FilterSlider
                        min={0}
                        max={20000}
                        maxText="Max Precio"
                        minText="Min Precio"
                        onChange={handlePriceSliderChange}
                    />
                    <FilterSlider
                        min={0}
                        max={1000}
                        minText="Min Cantidad"
                        maxText="Max Cantidad"
                        onChange={handleQuantitySliderChange}
                    />
                    <OrderBySelect
                        onChange={handleOnChance}
                    />
                    <div>
                        Resultados Totales: <Avatar style={{ backgroundColor: '#87d068' }} >{total}</Avatar>
                    </div>
            </div>
        );
    }
}

FilterBar.propTypes = {
    total: PropTypes.number,
    checked: PropTypes.bool,
    handleOnChance: PropTypes.func,
    handleSwitchChange: PropTypes.func,
    handleCheckboxChange: PropTypes.func,
    handlePriceSliderChange: PropTypes.func,
    handleQuantitySliderChange: PropTypes.func
};

export default FilterBar;
