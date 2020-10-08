import React, { useReducer } from 'react'

const initialstate = {
    firstcounter: 0,
    secondcounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state,firstcounter: state.firstcounter + action.value };

        case 'dec':
            return { ...state, firstcounter: state.firstcounter - action.value };

        case 'inc2':
            return { ...state, secondcounter: state.secondcounter + action.value };

        case 'dec2':
            return { ...state, secondcounter: state.secondcounter - action.value };
        case 'res':
            return initialstate;
        default:
            return state;
    }
}





function Counter2() {
    const [state, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <p>COUNT1 _ {state.firstcounter}</p>
            <p>COUNT2 _ {state.secondcounter}</p>


            <button onClick={() => dispatch({ type: 'inc', value: 1 })} >INCREMENT</button>
            <button onClick={() => dispatch({ type: 'dec', value: 1 })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'inc2', value: 5 })} >INCREMENT 5</button>
            <button onClick={() => dispatch({ type: 'dec2', value: 5 })}>DECREMENT 5</button>



            <button onClick={() => dispatch({ type: 'res', })}>RESET</button>


        </div>
    )
}




export default Counter2
