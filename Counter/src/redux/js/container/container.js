
import React from 'react';
import Counter from '../component/Counter';
import {add , minus,setNum , asyncAdd , asyncMinus} from '../actions/action'
import { connect } from 'react-redux';


const mapStateToProps = state =>({value:state});

const mapDispatchToProps = (dispatch , props) => ({
    onIncrement:function(){dispatch(add(props))} ,
    onDecrement:function(){dispatch(minus(props))},
    onAsyncIncrement:function(){  return dispatch(asyncAdd())} , 
    onAsyncDecrement:function(){return dispatch(asyncMinus())},
    setNum:function(num){dispatch(setNum(num))}
    }
);

export default connect(mapStateToProps ,mapDispatchToProps )(Counter);