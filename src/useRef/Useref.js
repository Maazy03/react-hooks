import React,{useRef,useEffect, useState} from 'react';

function Useref() {

const inputref=useRef(null)

useEffect(()=>
{
 inputref.current.focus()
},[])

    return (
        <div>
            <input ref={inputref} type="text"></input>

        </div>
    )
}

export default Useref
