
import React from 'react';
import Counter from '../component/Counter';
import {add , minus} from '../actions/index'
import { connect } from 'react-redux';

console.log(add , minus);

const mapStateToProps = state =>({value:state});

const mapDispatchToProps = (dispatch , props) => ({
    onIncrement:function(){dispatch(add(props))} ,
    onDecrement:function(){dispatch(minus(props))}
    }
);

export default connect(mapStateToProps ,mapDispatchToProps )(Counter);