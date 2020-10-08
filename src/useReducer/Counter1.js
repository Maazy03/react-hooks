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





function Counter1() {
    const[state,dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <p>COUNT _ {state}</p>
            <button onClick={()=>dispatch('inc')} >INCREMENT</button>
            <button onClick={()=>dispatch('dec')}>DECREMENT</button>
            <button onClick={()=>dispatch('res')}>RESET</button>


        </div>
    )
}




export default Counter1
