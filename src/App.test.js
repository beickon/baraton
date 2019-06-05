import App from './App';
import React from 'react';
import { expect } from 'chai';
import { Provider } from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from "redux-mock-store";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const shoppingCart = [{ id: 1 }];
const initialState = {shoppingCart};
const store = mockStore(initialState);

describe('<App />', () => {
    let connectedWrapper;

    beforeEach(()=>{
        connectedWrapper = shallow(<Provider store={store}><App /></Provider>);
    });

    it('Render the regular component', () => {
      expect(connectedWrapper.length).equal(1)
    });

});
