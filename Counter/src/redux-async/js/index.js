import "babel-polyfill";  //regeneratorRuntime is not defined
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Counter from './container/container'
import reducer from './reducer/index'
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
   <Provider store={store}>
            <Counter />
  </Provider>,
  document.getElementById('app')
);