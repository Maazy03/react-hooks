import React,{useState,useEffect} from 'react'

function Intervalhookcounter() {
    const[count,setCount]=useState(0);

const tick=()=>
{
    setCount(prevCount=>prevCount+1)
}

useEffect(() => {

    console.log("USE EFFECT INT")
    const interval = setInterval(tick,1000)
    return () => {
        clearInterval(interval)
    }
}, [])



    return (
        <div>
            {count}
        </div>
    )
}

export default Intervalhookcounter
