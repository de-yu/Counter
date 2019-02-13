
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

      const reducer = (state={'value':0}, action) => {

       switch (action.type) {
         case 'INCREMENT':
           return {'value':state['value']+1};
         case 'DECREMENT':
           return {'value':state['value']-1};
         default:
           return {'value':state['value']};
       }
     }

     export default reducer



container

這邊包裝
state 和 dispatch 到 component
這邊的意思是

this.props.value

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