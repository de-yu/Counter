


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