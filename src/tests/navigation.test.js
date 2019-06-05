import React from 'react';
import { Menu } from 'antd';
import { expect } from 'chai';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import { Nav, Navbar} from 'react-bootstrap';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";
import { getMenu } from "../actions/menuActions.js";
import ConnectedNavigation, {Navigation} from '../components/navigation/navigation.js';

configure({ adapter: new Adapter() });
const { SubMenu } = Menu;
const { Brand, Toggle, Collapse } = Navbar;
const mockStore = configureMockStore();
const menu = [{
                  "id": 1,
                  "icon": "coffee",
                  "name": "Bebidas",
                  "sublevels": [
                              {
                                "id": 1,
                                "icon": "",
                                "name": "Gaseosas",
                                "sublevels": [
                                  {
                                    "id": 2,
                                    "icon": "",
                                    "name": "Con azúcar"
                                  },
                                  {
                                    "id": 3,
                                    "icon": "",
                                    "name": "Sin azúcar"
                                  }
                                ]
                              }
                            ]
}];
const initialState = {menu};

describe('<Navigation />', () => {
  let wrapper;
  let connectedWrapper;

  beforeEach(()=>{
    const store = mockStore(initialState);
    wrapper = shallow(<Navigation getMenu={getMenu} menu={menu}/>)
    connectedWrapper = shallow(<Provider store={store}><ConnectedNavigation /></Provider>);
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render Navbar', () => {
    expect(wrapper.find(Navbar).length).equal(1);
  });

  it('Render Navbar Brand', () => {
    expect(wrapper.find(Navbar).find(Brand).length).equal(1);
  });

  it('Render Navbar Toggle', () => {
    expect(wrapper.find(Navbar).find(Toggle).length).equal(1);
  });

  it('Render Navbar Collapse', () => {
    expect(wrapper.find(Navbar).find(Collapse).length).equal(1);
  });

  it('Render Navbar Collapse 2 Nav', () => {
    expect(wrapper.find(Navbar).find(Collapse).find(Nav).length).equal(2);
  });

  it('Render Menu', () => {
    expect(wrapper.find(Navbar).find(Collapse).find(Nav).find('.mr-auto').find(Menu).length).equal(1);
  });

  it('Render SubMenu', () => {
    expect(wrapper.find(Navbar).find(Collapse).find(Nav).find('.mr-auto').find(Menu).find(SubMenu).length).equal(4);
  });

    //CONNECTED COMPONENT TESTS

    it('Render the connected component', () => {
      expect(connectedWrapper.length).equal(1)
    });

});
