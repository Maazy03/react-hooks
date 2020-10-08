import React from 'react'
import UseCounter from './UseCounter'

function C2() {

    const [count, increment, decrement, reset] = UseCounter(20,10)
    return (
        <div>
            <h1>COUNT-{count}</h1>
            <button onClick={increment}>INC</button>
            <button onClick={decrement}>DEC</button>
            <button onClick={reset}>RES</button>

        </div>
    )


}

export default C2
