import React,{useState} from 'react'

function HookCounter3() {
    
    const [name,setName]=useState({firstName:'',lastName:''})
    
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} />
            <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})} />
            
    <p>yoyur firstName is {name.firstName}</p>
    <p>yoyur lastName is {name.lastName}</p>
    <h1>{JSON.stringify(name)}</h1>
            
        </div>

 
 )
}

export default HookCounter3
