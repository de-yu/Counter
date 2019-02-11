
const add = add=>({
    type:"INCREMENT" , 
    add
})

const minus = minus =>({
    type:"DECREMENT" , 
    minus
})

const asyncAdd = function(){
  
  return async function(dispatch , state)
  {
    var n = await asyncadd();
    
    return n;
  }
}

const asyncMinus = function(){
  return async function(dispatch , state)
  {
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
export {add , minus , asyncAdd , asyncMinus}