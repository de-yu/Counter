
在 redux 中執行非同步的動作

包含使用

redux-thunk

applyMiddleware 

一般流程
 在 dispatch 後會將 action 的內容傳給 reducer

在非同步的動作下
會將一般流程的部分 放在 非同步的 callback 下
非同步執行完後 接著執行

以下是我個人的寫法

actions

將兩個 action 包裝成 async 的 function



    const setNum = setNum =>({
      type:"SETNUM" , 
      num:setNum
    })


    const asyncAdd = function(){

      return async function(dispatch , state){
        var n = await asyncadd();
        return n;
      }
    }

    const asyncMinus = function(){
      return async function(dispatch , state){
        var n = await asyncminus();
        return n;
      }
    }

    async  function asyncadd()
    {
      return new Promise(function(resolve , reject){
          setTimeout(function(){
            resolve(1);
          } , 500)
        })
    }

    async  function asyncminus()
    {
      return new Promise(function(resolve , reject){
          setTimeout(function(){
            resolve(-1);
          } , 500)
        })
    }
    export {setNum , asyncAdd , asyncMinus}

reducer

reducer 無法執行 非同步動作

基本上就是負責 非同步結束後 state 的變化


      const reducer = (state={'value':0}, action) => {

       switch (action.type) {
         case 'SETNUM':
           return {'value':state['value']+action.num};
         default:
           return {'value':state['value']};
       }
     }

     export default reducer

container

再傳給 component 的 function 中
將 非同步動作進行 return


    import React from 'react';
    import Counter from '../component/Counter';
    import {setNum , asyncAdd , asyncMinus} from '../actions/action'
    import { connect } from 'react-redux';


    const mapStateToProps = state =>({value:state});

    const mapDispatchToProps = (dispatch , props) => ({
        onAsyncIncrement:function(){  return dispatch(asyncAdd())} , 
        onAsyncDecrement:function(){return dispatch(asyncMinus())},
        setNum:function(num){dispatch(setNum(num))}
        }
    );

    export default connect(mapStateToProps ,mapDispatchToProps )(Counter);

component

將 container 傳的 function
在這邊進行包裝
將從 action 裡面回傳的 promise 寫入 resolve 

    import React from 'react';

    export default class Counter extends React.Component
    {
      constructor(props) {
        super(props);
      }
      asyncIncrement()
      {
        this.props.onAsyncIncrement().then(function(num){
            this.props.setNum(num);

        }.bind(this))
      }
      asyncDecrement()
      {
          this.props.onAsyncDecrement().then(function(num){
            this.props.setNum(num);

        }.bind(this))
      }
      render() {

        return(
                <p>
                    Clicked: {this.props.value.value} times
                    <button onClick={this.asyncIncrement.bind(this)}>
                        async +
                    </button>
                    <button onClick={this.asyncDecrement.bind(this)}>
                        async -
                    </button>
                </p>
                );
      }
    }
