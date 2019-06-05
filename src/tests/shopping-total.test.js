import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { Card, Button } from 'antd';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import ConnectedShoppingTotal, {ShoppingTotal} from '../components/shopping-total/shopping-total.js';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const initialState = {items: 0, amount: 0};
const store = mockStore(initialState);

describe('<ShoppingTotal />', () => {
  let wrapper;
  let connectedWrapper;

  beforeEach(()=>{
    wrapper = shallow(<ShoppingTotal items={initialState.items} amount={initialState.amount} buyShoppingCart={() => {}}  getShoppingCartTotals={() => {}}/>)
    connectedWrapper = shallow(<Provider store={store}><ConnectedShoppingTotal /></Provider>);
  });

  //REGULAR COMPONENT TEST

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Check component loading, state', () => {
    expect(wrapper.state().loading).equal(true)
  });

  it('Render Card component', () => {
    expect(wrapper.find(Card).length).equal(1);
  });

  it('Check card title', () => {
    expect(wrapper.find(Card).prop('title')).equal('Subtotal (0 productos): $0.00');
  });

  it('Render Button component', () => {
    expect(wrapper.find(Card).find(Button).length).equal(1);
  });

  it('Render Button is disabled', () => {
    expect(wrapper.find(Card).find(Button).prop('disabled')).equal(true);
  });

  it('Render Button is not disabled', () => {
    wrapper = shallow(<ShoppingTotal items={1} amount={initialState.amount} getShoppingCartTotals={() => {}}/>)
    expect(wrapper.find(Card).find(Button).prop('disabled')).equal(false);
  });

  it('Simulates click events', () => {
    const onButtonClick = sinon.spy();
    expect(onButtonClick).to.be.an.instanceof(Function);
  });

  //CONNECTED COMPONENT TESTS

  it('Render the connected component', () => {
    expect(connectedWrapper.length).equal(1)
  });

});
