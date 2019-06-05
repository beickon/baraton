import React from 'react';
import { expect } from 'chai';
import { Card, Badge, Button } from 'antd';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductCard from '../components/general/product-card/product-card.js';

configure({ adapter: new Adapter() });

describe('<ProductCard />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<ProductCard
                        name='name'
                        price='$1,000'
                        quantity={800}
                        available={true}
                        handleAddToCart={() => {}}/>)
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render Badge component', () => {
    expect(wrapper.find('.card').find(Badge).length).equal(1);
  });

  it('Check Badge component count', () => {
    expect(wrapper.find('.card').find(Badge).prop('count')).equal(800);
  });

  it('Check Badge component overflowCount', () => {
    expect(wrapper.find('.card').find(Badge).prop('overflowCount')).equal(999);
  });

  it('Render Card component', () => {
    expect(wrapper.find('.card').find(Badge).find(Card).length).equal(1);
  });

  it('Check Card component title', () => {
    expect(wrapper.find('.card').find(Badge).find(Card).prop('title')).equal('name');
  });

  it('Check Card component extra', () => {
    expect(wrapper.find('.card').find(Badge).find(Card).prop('extra')).equal('$1,000');
  });

  it('Check Card component hoverable', () => {
    expect(wrapper.find('.card').find(Badge).find(Card).prop('hoverable')).equal(true);
  });

  it('Render Card component text', () => {
    expect(wrapper.find('.card').find(Badge).find(Card).find('p').length).equal(1);
  });

  it('Check Card component text', () => {
    expect(wrapper.find('.card').find(Badge).find(Card).find('p').text()).equal('Disponible');
  });


});
