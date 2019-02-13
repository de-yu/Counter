# Counter

This project is in order to practice some js frameworks.

1.webpack  
2.webpack-dev-server  
3.react  
4.react-redux  
<br>

# Installation

        npm install

# Scripts

Pack the js file by using webpack

        npm run build
        
Runs the app in the development mode.
Open http://localhost:7000 to view it in the browser.

        npm run dev

這個專案目的是對 react 的使用作紀錄

並包含 

redux

redux-thunk

applyMiddleware 

在 redux 中執行非同步的動作

對 redux 這個module 做個了解
 
actions

    const add = add=>({
        type:"INCREMENT" , 
        add
    })

    const minus = minus =>({
        type:"DECREMENT" , 
        minus
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
            resolve("add");
          } , 500)
        })
    }

    async  function asyncminus()
    {
      return new Promise(function(resolve , reject){
          setTimeout(function(){
            resolve("minus");
          } , 500)
        })
    }

add 和 minus 為一般不需非同動作的 action
通常 包含type 以及一個參數 傳遞給 reducer

asyncAdd 和 asyncMinus 包裝成兩個非同步動作 
在 500ms 後 return

component

Counter

    class Counter extends React.Component
    {
      constructor(props) {
        super(props);
      }
      asyncIncrement()
      {
        this.props.onAsyncIncrement().then(function(type){
          if(type=="add"){
            this.props.onIncrement();
          }
        }.bind(this))
      }
      asyncDecrement()
      {
          this.props.onAsyncDecrement().then(function(type){
          if(type=="minus"){
            this.props.onDecrement();
          }
        }.bind(this))
      }
      render() {

        return(
                <p>
                    Clicked: {this.props.value.value} times
                    <button onClick={this.props.onIncrement}>
                        +
                    </button>
                    <button onClick={this.props.onDecrement}>
                        -
                    </button>
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
