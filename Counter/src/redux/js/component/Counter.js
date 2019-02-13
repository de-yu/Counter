
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
