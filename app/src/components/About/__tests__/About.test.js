import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import About from '../index';

describe('About Test Suite', () => {
   it('renders component', () => {
       const wrapper = mount(<BrowserRouter><About /></BrowserRouter>);
       expect(wrapper.length).toBe(1);
       wrapper.unmount();
   }) ;
});