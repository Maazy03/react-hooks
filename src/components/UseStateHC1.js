import React,{useState,useEffect} from 'react'

function UseStateHC1() {

    const[count,setCount]=useState(0);
const [name,setName]=useState('');

    useEffect(() => {
     console.log("updating use effect")
        document.title=`YOU CLICKED ${count} times`
    },[count])
    return (
        <div>
             <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>CLIKC</button>
            
        </div>
    )
}

export default UseStateHC1
