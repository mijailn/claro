import { SET_TOKEN, initAuth, getToken } from 'Modules/auth';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

class LocalStorageMock {
  constructor() {
    this.store = {
      token: '{"access_token": "asdfasdsdfas"}'
    };
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('Auth module actions', () => {
  beforeEach(function() {
    moxios.install();
  });
  afterEach(function() {
    moxios.uninstall();
  });

  it('should init action ', () => {
    const store = mockStore({ posts: {} });
    const expectedAction = {
      type: SET_TOKEN,
      payload: { access_token: 'asdfasdsdfas' }
    };
    store.dispatch(initAuth());
    expect(store.getActions()).toEqual([expectedAction]);
  });
  it('should create an action to reset repository', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        data: { access_token: 'asdfasd' }
      });
    });

    const expectedAction = {
      type: SET_TOKEN
    };

    const store = mockStore({});

    return store.dispatch(getToken()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual([expectedAction]);
    });
    // expect(getToken()).toEqual(expectedAction)
  });
});
