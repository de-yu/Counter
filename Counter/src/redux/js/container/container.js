
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