import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './container/container'
import reducer from './reducer/index'


const store = createStore(reducer);

ReactDOM.render(
   <Provider store={store}>
            <Counter prop ={"test"}/>
  </Provider>,
  document.getElementById('app')
);