import React from 'react';
import { expect } from 'chai';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import ShoppingCartItem from '../components/shopping-cart-item/shopping-cart-item.js';
import ConnectedShoppingList, {ShoppingList} from '../components/shopping-list/shopping-list.js';
import { getShoppingCart, deleteShoppingItem, getShoppingCartTotals } from '../actions/shoppingCartActions.js';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const shoppingCart = [{ id: 1 }];
const initialState = {shoppingCart};
const store = mockStore(initialState);

describe('<ShoppingList />', () => {
  let wrapper;
  let connectedWrapper;

  beforeEach(()=>{
    wrapper = shallow(<ShoppingList deleteShoppingItem={deleteShoppingItem} getShoppingCartTotals={getShoppingCartTotals} getShoppingCart={getShoppingCart} shoppingCart={shoppingCart}/>)
    connectedWrapper = shallow(<Provider store={store}><ConnectedShoppingList /></Provider>);
  });

  //REGULAR COMPONENT TEST

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Check component loading, state', () => {
    expect(wrapper.state().loading).equal(true)
  });

  it('Render ShoppingCartItem component', () => {
    expect(wrapper.find(ShoppingCartItem).length).equal(1);
  });

  it('Render 3 ShoppingCartItem component', () => {
    wrapper = shallow(<ShoppingList getShoppingCart={getShoppingCart} shoppingCart={[{id:1},{id:2},{id:3}]}/>)
    expect(wrapper.find(ShoppingCartItem).length).equal(3);
  });

  it('Check if ShoppingCartItem is using correct values', () => {
    expect(wrapper.find(ShoppingCartItem).prop('item')).equal(shoppingCart[0]);
  });

  it('Check if ShoppingCartItem has function on onCountChange', () => {
    expect(wrapper.find(ShoppingCartItem).prop('onCountChange')).to.be.an.instanceof(Function);
  });

  it('Check if ShoppingCartItem has function on onDelete', () => {
    expect(wrapper.find(ShoppingCartItem).prop('onDelete')).to.be.an.instanceof(Function);
  });

  it('Check if state change on getShoppingCart function', () => {
    wrapper.instance().getShoppingCart();
    setTimeout(() => {
      expect(wrapper.state().loading).equal(false);
    }, 2500);
  });

  it('Check handleDeleteShoppingItem function', () => {
    wrapper.instance().handleDeleteShoppingItem(1);
  });

  //CONNECTED COMPONENT TESTS

  it('Render the connected component', () => {
    expect(connectedWrapper.length).equal(1)
  });

});
