import React from 'react';
import { expect } from 'chai';
import { Slider } from 'antd';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FilterSlider from '../components/general/slider/filter-slider.js';

configure({ adapter: new Adapter() });

describe('<FilterSlider />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<FilterSlider
                        min={0}
                        max={800}
                        minText='minText'
                        maxText='maxText'
                        onChange={() => {}} />)
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render 2 p component', () => {
    expect(wrapper.find('.icon-wrapper').find('p').length).equal(2);
  });

  it('Check first p component text', () => {
    expect(wrapper.find('.icon-wrapper').find('p').at(0).text()).equal('minText');
  });

  it('Check second p component text', () => {
    expect(wrapper.find('.icon-wrapper').find('p').at(1).text()).equal('maxText');
  });

  it('Render Slider component', () => {
    expect(wrapper.find('.icon-wrapper').find(Slider).length).equal(1);
  });

  it('Check Slider component max value', () => {
    expect(wrapper.find('.icon-wrapper').find(Slider).prop('max')).equal(800);
  });

  it('Check Slider component min value', () => {
    expect(wrapper.find('.icon-wrapper').find(Slider).prop('min')).equal(0);
  });

  it('Check Slider component defaultValue value', () => {
    expect(wrapper.find('.icon-wrapper').find(Slider).prop('defaultValue')).to.be.instanceOf(Array);
  });

  it('Check Slider component onChange', () => {
    expect(wrapper.find('.icon-wrapper').find(Slider).prop('onChange')).to.be.instanceOf(Function);
  });

});
