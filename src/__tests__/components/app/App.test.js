import React from 'react';
import App from 'Components/app';
import { shallow } from 'enzyme';

describe('Test <App /> component', () => {
  it('Should be defined', () => {
    expect(App).toBeDefined();
  });

  it('Should render correctly', () => {
    shallow(<App />);
  });
  it('Should have navbrand and nav item', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('main').length).toBe(1);
  });
});
