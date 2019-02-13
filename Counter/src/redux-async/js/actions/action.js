
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