import React, { useState, useCallback } from 'react'
import Count from './Counts';
import Button from './Button'
import Title from './Title'
function Parent() {
    
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)


    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])


    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])


    return (
        <div>
            <Title />
            <Count text="AGE" count={age} />
            <Button handleClick={incrementAge}>INC AGE</Button>
            <Count text="SLARY" count={salary} />
            <Button handleClick={incrementSalary}>INC SALARY</Button>

        </div>
    )
}

export default Parent
