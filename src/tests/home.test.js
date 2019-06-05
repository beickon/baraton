import React from 'react';
import { expect } from 'chai';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import ConnectedHome, {Home} from '../components/home/home.js';
import Navigation from '../components/navigation/navigation.js';
import { addToShoppingCart } from '../actions/shoppingCartActions.js';
import FilterBar from '../components/general/filter-bar/filter-bar.js';
import ProductCard from '../components/general/product-card/product-card.js';
import LoadingCard from '../components/general/loading-card/loading-card.js';
import { getProducts, sortProducts, filterProducts, filterProductsByRange } from '../actions/productActions.js';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const products = [{
                    products: [{
                      quantity: 308,
                      price: "$8,958",
                      available: false,
                      sublevel_id: 3,
                      name: "aute",
                      id: "58b5a5b1b6b6c7aacc25b3fb"
                  }]
              }];
const initialState = {products};

describe('<Home />', () => {
  let wrapper;
  let connectedWrapper;

  beforeEach(()=>{
    const store = mockStore(initialState);
    wrapper = shallow(<Home.WrappedComponent getProducts={getProducts} products={products} location={{search:""}}/>)
    connectedWrapper = shallow(<Provider store={store}><ConnectedHome /></Provider>);
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Check component checked state', () => {
    // console.log(wrapper.debug());
    expect(wrapper.state().checked).equal(true);
  });

  it('Check component loading state', () => {
    expect(wrapper.state().loading).equal(true);
  });

  it('Render one FilterBar', () => {
    expect(wrapper.find('div').find(FilterBar).length).equal(1);
  });

  it('Render 4 LoadingCards', () => {
    expect(wrapper.find('div').find('.home').find(LoadingCard).length).equal(4);
  });

  it('Render 1 ProductCard', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).length).equal(1);
    }, 2500);
  });

  it('Check ProductCard name prop', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).prop('name')).equal('aute');
    }, 2500);
  });

  it('Check ProductCard price prop', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).prop('price')).equal('$8,958');
    }, 2500);
  });

  it('Check ProductCard quantity prop', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).prop('quantity')).equal(308);
    }, 2500);
  });

  it('Check ProductCard available prop', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).prop('available')).equal(false);
    }, 2500);
  });

  it('Check ProductCard sublevel_id prop', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).prop('sublevel_id')).equal(3);
    }, 2500);
  });

  it('Check ProductCard handleAddToCart prop', () => {
    wrapper.instance().getProducts();
    setTimeout(() => {
      expect(wrapper.find('div').find('.home').find(ProductCard).prop('handleAddToCart')).to.be.instanceOf(Function);
    }, 2500);
  });

    //CONNECTED COMPONENT TESTS

    it('Render the connected component', () => {
      expect(connectedWrapper.length).equal(1)
    });

});
