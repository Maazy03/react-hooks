import React, { useState, useMemo } from 'react'

function UseMemo() {


    const [c1, setC1] = useState(0)
    const [c2, setC2] = useState(0)

    const inc1 = () => {
        setC1(c1 + 1)
    }

    const inc2 = () => {
        setC2(c2 + 1)
    }

    const isEven = useMemo(
        () => {
            let i = 0;
            while (i < 2000000000) i++
            return c1 % 2 === 0;
        }, [c1])







    return (
        <div>
            <button onClick={inc1}>C1-{c1}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            <button onClick={inc2}>C2-{c2}</button>


        </div>
    )
}

export default UseMemo
