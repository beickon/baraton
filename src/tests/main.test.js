import React from 'react';
import { expect } from 'chai';
import { Layout } from 'antd';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../components/main/main.js';
import Navigation from '../components/navigation/navigation.js';

configure({ adapter: new Adapter() });

const {
    Header, Footer, Content,
} = Layout;

describe('<Main />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Main />)
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render Navigation component', () => {
    expect(wrapper.find('.o-wrapper').find(Navigation).length).equal(1);
  });

  it('Render Layout component', () => {
    expect(wrapper.find('.o-wrapper').find(Layout).length).equal(1);
  });

  it('Render Layout Header component', () => {
    expect(wrapper.find('.o-wrapper').find(Layout).find(Header).length).equal(1);
  });

  it('Render Layout Footer component', () => {
    expect(wrapper.find('.o-wrapper').find(Layout).find(Footer).length).equal(1);
  });

});
