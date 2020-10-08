import React, { useReducer } from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1;

        case 'dec':
            return state - 1;

        case 'res':
            return initialstate;
        default:
            return state;
    }
}





function Counter3() {
    const[state,dispatch] = useReducer(reducer, initialstate)
    const[state2,dispatch2] = useReducer(reducer, initialstate)
    
    return (
        <div>
            <p>COUNT _ {state}</p>
            <button onClick={()=>dispatch('inc')} >INCREMENT</button>
            <button onClick={()=>dispatch('dec')}>DECREMENT</button>
            <button onClick={()=>dispatch('res')}>RESET</button>
            <p>COUNT2 _ {state2}</p>
            <button onClick={()=>dispatch2('inc')} >INCREMENT</button>
            <button onClick={()=>dispatch2('dec')}>DECREMENT</button>
            <button onClick={()=>dispatch2('res')}>RESET</button>


        </div>
    )
}




export default Counter3
