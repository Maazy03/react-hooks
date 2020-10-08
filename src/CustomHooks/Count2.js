import React,{useState} from 'react'
import UseDocumentTilte from './UseDocumentTilte'

function Count2() {


    const [count,setCount]=useState(0)
UseDocumentTilte(count)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>COUNT {count}</button>
        </div>
    )
}

export default Count2
