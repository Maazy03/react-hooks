import React,{useState,useEffect} from 'react'

function HookMouse() {

const [x,setX]=useState(0)
const [y,setY]=useState(0)

const logmouseposition = (e)=>
{
    console.log("MOUSE POSITION")
    setX(e.clientX)
    setY(e.clientY)
}


useEffect(()=>
{
    console.log("USE EFFECT ")
    window.addEventListener("mousemove",logmouseposition)
   return ()=>
   { console.log("componenet unmounting")
       window.removeEventListener("mousemove",logmouseposition)
   }
},[])



    return (
        <div>
            X-{x}
            Y-{y}
            
        </div>
    )
}

export default HookMouse
