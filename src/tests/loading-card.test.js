import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card, Skeleton, Avatar } from 'antd';
import LoadingCard from '../components/general/loading-card/loading-card.js';

const { Meta } = Card;

configure({ adapter: new Adapter() });

describe('<LoadingCard />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<LoadingCard />)
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render Card component', () => {
    expect(wrapper.find(Card).length).equal(1);
  });

  it('Render Skeleton component', () => {
    expect(wrapper.find(Card).find(Skeleton).length).equal(1);
  });

  it('Render Skeleton component prop loading equal true', () => {
    expect(wrapper.find(Card).find(Skeleton).prop('loading')).equal(true);
  });

  it('Render Skeleton component prop active equal true', () => {
    expect(wrapper.find(Card).find(Skeleton).prop('active')).equal(true);
  });

  it('Render Meta component', () => {
    expect(wrapper.find(Card).find(Skeleton).find(Meta).length).equal(1);
  });

  it('Check Meta component title', () => {
    expect(wrapper.find(Card).find(Skeleton).find(Meta).prop('title')).equal(undefined);
  });

  it('Check Meta component description', () => {
    expect(wrapper.find(Card).find(Skeleton).find(Meta).prop('description')).equal(undefined);
  });

});
