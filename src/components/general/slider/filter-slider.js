import './filter-slider.scss';
import { Slider } from 'antd';
import React, { Component } from "react";

class FilterSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    render() {
        const { minText, maxText, max, min } = this.props;

        return (
            <div className="icon-wrapper">
                <p>{minText}</p>
                <Slider range max={max} min={min} defaultValue={[min, max]} onChange={this.props.onChange} />
                <p>{maxText}</p>
            </div>
        );
    }
}

export default FilterSlider;
