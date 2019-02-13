const add = add=>({
    type:"INCREMENT" , 
    add:add
})

const minus = minus =>({
    type:"DECREMENT" , 
    minus:minus
})

export {add , minus}