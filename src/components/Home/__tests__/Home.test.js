import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Home from '../index';

describe('Home Test Suite', () => {
    it('renders component', () => {
        const wrapper = mount(<BrowserRouter><Home /></BrowserRouter>);
        expect(wrapper.length).toBe(1);
        wrapper.unmount();
    });
});
