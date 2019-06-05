import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Switch, Avatar, Checkbox } from 'antd';
import FilterBar from '../components/general/filter-bar/filter-bar.js';
import FilterSlider from '../components/general/slider/filter-slider.js'
import OrderBySelect from '../components/general/order-by-select/order-by-select.js'

configure({ adapter: new Adapter() });

describe('<FilterBar />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<FilterBar
                        total={70}
                        checked={true}
                        handleOnChance={() => {}}
                        handleSwitchChange={() => {}}
                        handleCheckboxChange={() => {}}
                        handlePriceSliderChange={() => {}}
                        handleQuantitySliderChange={() => {}} />)
  });

  //REGULAR COMPONENT TEST

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render Checkbox component', () => {
    expect(wrapper.find('.filter-bar').find(Checkbox).length).equal(1);
  });

  it('Render Checkbox component prop checked equal true', () => {
    expect(wrapper.find('.filter-bar').find(Checkbox).prop('checked')).equal(true);
  });

  it('Check Checkbox component prop onChange equal Function', () => {
    expect(wrapper.find('.filter-bar').find(Checkbox).prop('onChange')).to.be.instanceOf(Function);
  });

  it('Render Switch component', () => {
    expect(wrapper.find('.filter-bar').find('div').at(0).find(Switch).length).equal(1);
  });

  it('Render Avatar component', () => {
    expect(wrapper.find('.filter-bar').find('div').at(2).find(Avatar).length).equal(1);
  });

  it('Render 2 FilterSlider component', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).length).equal(2);
  });

  it('Check first FilterSlider component min value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(0).prop('min')).equal(0);
  });

  it('Check first FilterSlider component max value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(0).prop('max')).equal(20000);
  });

  it('Check first FilterSlider component maxText value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(0).prop('maxText')).equal('Max Precio');
  });

  it('Check first FilterSlider component minText value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(0).prop('minText')).equal('Min Precio');
  });

  it('Check second FilterSlider component min value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(1).prop('min')).equal(0);
  });

  it('Check second FilterSlider component max value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(1).prop('max')).equal(1000);
  });

  it('Check second FilterSlider component maxText value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(1).prop('maxText')).equal('Max Cantidad');
  });

  it('Check second FilterSlider component minText value', () => {
    expect(wrapper.find('.filter-bar').find(FilterSlider).at(1).prop('minText')).equal('Min Cantidad');
  });

  it('Render OrderBySelect component', () => {
    expect(wrapper.find('.filter-bar').find(OrderBySelect).length).equal(1);
  });

  it('Check OrderBySelect component prop onChange equal Function', () => {
    expect(wrapper.find('.filter-bar').find(OrderBySelect).prop('onChange')).to.be.instanceOf(Function);
  });

  it('Check component has 3 divs', () => {
    expect(wrapper.find('.filter-bar').find('div').length).equal(3);
  });

});
