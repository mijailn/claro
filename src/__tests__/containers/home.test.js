import React from 'react';
import ConnectedHome, { Home } from 'Containers/home';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

const initialState = {
  home: {
    peliculas: [],
    pelicula: {}
  }
};
const mockStore = configureStore();
let store, container;

describe('Test <Home /> container ', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedHome store={store} />);
  });

  it('Should be defined', () => {
    expect(Home).toBeDefined();
  });
  it('Should be defined', () => {
    expect(ConnectedHome).toBeDefined();
  });

  it('Check prop issues and prop repositories', () => {
    expect(container.prop('peliculas')).toEqual(initialState.home.peliculas);
  });
});
