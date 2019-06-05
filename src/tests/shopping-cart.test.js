import React from 'react';
import sinon from 'sinon';
import { Empty } from 'antd';
import { expect } from 'chai';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import { getShoppingCart } from '../actions/shoppingCartActions.js';
import ShoppingList  from '../components/shopping-list/shopping-list.js';
import ShoppingTotal  from '../components/shopping-total/shopping-total.js';
import ConnectedShoppingCart, {ShoppingCart} from '../components/shopping-cart/shopping-cart.js';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const shoppingCart = [{ id: 1 }];
const initialState = {shoppingCart};
const store = mockStore(initialState);

describe('<ShoppingCart />', () => {
  let wrapper;
  let connectedWrapper;

  beforeEach(()=>{
    wrapper = shallow(<ShoppingCart getShoppingCart={getShoppingCart} shoppingCart={shoppingCart}/>)
    connectedWrapper = shallow(<Provider store={store}><ConnectedShoppingCart /></Provider>);
  });

  //REGULAR COMPONENT TEST

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render the regular component with ShoppingList', () => {
    expect(wrapper.find('.shopping-cart').find(ShoppingList).length).equal(1);
  });

  it('Render the regular component with ShoppingTotal', () => {
    expect(wrapper.find('.shopping-cart').find(ShoppingTotal).length).equal(1);
  });

  it('Render the regular component with empty state', () => {
    let inner_wrapper = shallow(<ShoppingCart getShoppingCart={getShoppingCart} shoppingCart={[]}/>)
    expect(inner_wrapper.find(Empty).length).equal(1);
  });


  it('Check component loading, state', () => {
    expect(wrapper.state().loading).equal(true)
  });

  it('Check if state change on getShoppingCart function', () => {
    wrapper.instance().getShoppingCart();
    setTimeout(() => {
      expect(wrapper.state().loading).equal(false);
    }, 2500);
  });

  //CONNECTED COMPONENT TESTS

  it('Render the connected component', () => {
    expect(connectedWrapper.length).equal(1)
  });

});
