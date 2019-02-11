
import React from 'react';

export default class Counter extends React.Component
{
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  asyncIncrement()
  {

    this.props.onAsyncIncrement().then(function(type){
      if(type=="add")
      {
        this.props.onIncrement();
      }
    }.bind(this))
  }
  asyncDecrement()
  {
        this.props.onAsyncDecrement().then(function(type){
      if(type=="minus")
      {
        this.props.onDecrement();
      }
    }.bind(this))
  }
  render() {
    console.log(this.props);
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
