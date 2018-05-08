import { GET_CATEGORIA } from 'Modules/home';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Home actions', () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it('should create an action to reset repository', () => {
    const expectedAction = {
      type: GET_CATEGORIA
    };
    // expect(clearRepository()).toEqual(expectedAction)
  });
  it('should create an action to reset repository', () => {
    const expectedAction = {
      type: GET_CATEGORIA
    };
    // expect(clearRepository()).toEqual(expectedAction)
  });
});
