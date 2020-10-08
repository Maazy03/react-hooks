import React,{useState} from 'react'
import UseDocumentTilte from './UseDocumentTilte'

function Count1() {


    const [count,setCount]=useState(0)
UseDocumentTilte(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>COUNT {count}</button>
        </div>
    )
}

export default Count1
