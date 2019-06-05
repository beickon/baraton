import React from 'react';
import { Select } from 'antd';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrderBySelect from '../components/general/order-by-select/order-by-select.js';

const { Option, OptGroup } = Select;

configure({ adapter: new Adapter() });

describe('<OrderBySelect />', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<OrderBySelect onChange={() => {}}/>)
  });

  it('Render the regular component', () => {
    expect(wrapper.length).equal(1)
  });

  it('Render Select component', () => {
    expect(wrapper.find(Select).length).equal(1);
  });

  it('Check Select placeholder', () => {
    expect(wrapper.find(Select).prop('placeholder')).equal('Ordenar por');
  });

  it('Check Select onChange', () => {
    expect(wrapper.find(Select).prop('onChange')).to.be.instanceOf(Function);
  });

  it('Render 3 OptGroup', () => {
    expect(wrapper.find(Select).find(OptGroup).length).equal(3);
  });

  it('Render OptGroup Precio', () => {
    expect(wrapper.find(Select).find(OptGroup).at(0).prop('label')).equal('Precio');
  });

  it('Render 2 Options at OptGroup Precio', () => {
    expect(wrapper.find(Select).find(OptGroup).at(0).find(Option).length).equal(2);
  });

  it('Check OptGroup Precio sortdir values', () => {
    expect(wrapper.find(Select).find(OptGroup).at(0).find(Option).at(0).prop('sortdir')).equal('asc');
    expect(wrapper.find(Select).find(OptGroup).at(0).find(Option).at(1).prop('sortdir')).equal('desc');
  });

  it('Check OptGroup Precio values', () => {
    expect(wrapper.find(Select).find(OptGroup).at(0).find(Option).at(0).prop('value')).equal('low-high');
    expect(wrapper.find(Select).find(OptGroup).at(0).find(Option).at(1).prop('value')).equal('high-low');
  });

  it('Render OptGroup Disponibilidad', () => {
    expect(wrapper.find(Select).find(OptGroup).at(1).prop('label')).equal('Disponibilidad');
  });

  it('Render 2 Options at OptGroup Disponibilidad', () => {
    expect(wrapper.find(Select).find(OptGroup).at(1).find(Option).length).equal(2);
  });

  it('Check OptGroup Disponibilidad sortdir values', () => {
    expect(wrapper.find(Select).find(OptGroup).at(1).find(Option).at(0).prop('sortdir')).equal('asc');
    expect(wrapper.find(Select).find(OptGroup).at(1).find(Option).at(1).prop('sortdir')).equal('desc');
  });

  it('Check OptGroup Disponibilidad values', () => {
    expect(wrapper.find(Select).find(OptGroup).at(1).find(Option).at(0).prop('value')).equal('notAvailable-available');
    expect(wrapper.find(Select).find(OptGroup).at(1).find(Option).at(1).prop('value')).equal('available-notAvailable');
  });

  it('Render OptGroup Cantidad', () => {
    expect(wrapper.find(Select).find(OptGroup).at(2).prop('label')).equal('Cantidad');
  });

  it('Render 2 Options at OptGroup Cantidad', () => {
    expect(wrapper.find(Select).find(OptGroup).at(2).find(Option).length).equal(2);
  });

  it('Check OptGroup Cantidad sortdir values', () => {
    expect(wrapper.find(Select).find(OptGroup).at(2).find(Option).at(0).prop('sortdir')).equal('asc');
    expect(wrapper.find(Select).find(OptGroup).at(2).find(Option).at(1).prop('sortdir')).equal('desc');
  });

  it('Check OptGroup Cantidad values', () => {
    expect(wrapper.find(Select).find(OptGroup).at(2).find(Option).at(0).prop('value')).equal('less-more');
    expect(wrapper.find(Select).find(OptGroup).at(2).find(Option).at(1).prop('value')).equal('more-less');
  });

});
