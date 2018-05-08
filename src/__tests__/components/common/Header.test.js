import React from 'react';
import { Header } from 'Components/common';
import { shallow, render } from 'enzyme';

describe('Test <Header /> component', () => {
  it('Should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('Should render correctly', () => {
    render(<Header />);
  });
  it('Should have navbrand', () => {
    const wrapper = render(<Header />);
    expect(wrapper.find('.logo')).toHaveLength(1);
    expect(wrapper.find('.buscador')).toHaveLength(1);
  });
});
