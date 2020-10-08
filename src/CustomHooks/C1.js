import React from 'react'
import UseCounter from './UseCounter'

function C1() {

    const [count, increment, decrement, reset] = UseCounter(10,15)
    return (
        <div>
            <h1>COUNT-{count}</h1>
            <button onClick={increment}>INC</button>
            <button onClick={decrement}>DEC</button>
            <button onClick={reset}>RES</button>

        </div>
    )


}

export default C1
