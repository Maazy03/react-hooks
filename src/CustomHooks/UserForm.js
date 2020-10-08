import React, { useState } from 'react'
import UseInput from './UseInput'

function UserForm() {


    const [firstName, bindfirstName, resetfirstName] = UseInput('Maaz')
    const [lastName, bindlastName, resetlastName] = UseInput('SID')

    const SubmitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetfirstName()
        resetlastName()
    }


    return (
        <div>
            <h1>HELL</h1>
            <form onSubmit={SubmitHandler}>
                <label>FIRST NAME</label>
                <input type="text" {...bindfirstName} />
                <label>LAST NAME</label>
                <input type="text" {...bindlastName} />

                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default UserForm
