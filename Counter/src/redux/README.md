
對 react 和 redux 的基本使用作個紀錄

整體分成 4 大塊
action : 定義給 reducer 的動作
component : 元件主體
container : 要傳遞給元件的 props 包含 state 和 function
reducer : 接收 action 更新 state
 
actions

add 和 minus 為一個動作類型的宣告

可以分別傳入參數

在帶給 reducer

在這案例沒有使用到

    const add = add=>({
    type:"INCREMENT" , 
    add:add
    })

    const minus = minus =>({
        type:"DECREMENT" , 
        minus:minus
    })
    
    export {add , minus}



reducer


傳入的 action

以上一個部分定義好的為主

以 action.type 分別做對應的動作 

      const reducer = (state={num:0}, action) => {

       switch (action.type) {
         case 'INCREMENT':
           return {num:state['num']+1};
         case 'DECREMENT':
           return {num:state['num']-1};
         default:
           return {num:state['num']};
       }
     }

     export default reducer



container

這邊包裝
state 和 dispatch 到 component
state 代表component 使用到的變數
dispatch 代表要使用的 function
這邊的包含

this.props.value = {num:0}

this.props.onIncrement

this.props.onDecrement

    import React from 'react';
    import Counter from '../component/Counter';
    import {add , minus} from '../actions/action'
    import { connect } from 'react-redux';


    const mapStateToProps = state =>({value:state});

    const mapDispatchToProps = (dispatch , props) => ({
        onIncrement:function(){dispatch(add(props))} ,
        onDecrement:function(){dispatch(minus(props))},
        }
    );

    export default connect(mapStateToProps ,mapDispatchToProps )(Counter);


Component

Counter

將 props 放入 render 中


    import React from 'react';

    export default class Counter extends React.Component
    {
      constructor(props) {
        super(props);
      }
      render() {

        return(
                <p>

                    Clicked: {this.props.value.num} times
                    <button onClick={this.props.onIncrement}>
                        +
                    </button>
                    <button onClick={this.props.onDecrement}>
                        -
                    </button>
                </p>
                );
      }
    }

最後統整

createStore
並放進 Provider

    import React from 'react';
    import ReactDOM from 'react-dom';
    import {createStore} from 'redux';
    import {Provider} from 'react-redux';
    import Counter from './container/container'
    import reducer from './reducer/index'


    const store = createStore(reducer);

    ReactDOM.render(
       <Provider store={store}>
                <Counter />
      </Provider>,
      document.getElementById('app')
    );