import React from 'react';
import { expect } from 'chai';
import { Popconfirm, Card } from 'antd';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShoppingCartItem from '../components/shopping-cart-item/shopping-cart-item.js';

configure({ adapter: new Adapter() });

const item = {name: 'name', price: '$1,000', count: 1, quantity: 100 };

describe('<ShoppingCartItem />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<ShoppingCartItem item={item}/>)
  });

  //REGULAR COMPONENT TEST

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Check component loading, state', () => {
    expect(wrapper.state().loading).equal(false)
  });

  it('Render Card component', () => {
    expect(wrapper.find(Card).length).equal(1);
  });

  it('Check card loading', () => {
    expect(wrapper.find(Card).prop('loading')).equal(false);
  });

  it('Check card has 3 divs', () => {
    expect(wrapper.find(Card).find('div').length).equal(3);
  });

  it('Check card has 1 img', () => {
    expect(wrapper.find(Card).find('img').length).equal(1);
  });

  it('Check card img has default src', () => {
    expect(wrapper.find(Card).find('img').prop('src')).equal('../../../assets/images/img.png');
  });

  it('Check card img has default size', () => {
    expect(wrapper.find(Card).find('img').prop('width')).equal('60');
  });

  it('Check card h4 name exists', () => {
    expect(wrapper.find(Card).find('div').find('.description').find('h4').length).equal(1);
  });

  it('Check card h4 name equals name', () => {
    expect(wrapper.find(Card).find('div').find('.description').find('h4').text()).equal(item.name);
  });

  it('Check card p equals Only 100 left!', () => {
    expect(wrapper.find(Card).find('div').find('.description').find('p').text()).equal(`Only ${item.quantity} left!`);
  });

  it('Check card has Popconfirm', () => {
    expect(wrapper.find(Card).find('div').find('.description').find(Popconfirm).length).equal(1);
  });

  it('Check card has Popconfirm has function', () => {
    expect(wrapper.find(Card).find('div').find('.description').find(Popconfirm).prop('onConfirm')).to.be.an.instanceof(Function);
  });


});
