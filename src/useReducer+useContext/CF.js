import React,{useContext} from 'react';
import { CountContext } from '../App';


function CF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <p>COMPONENT F</p>
            <p>COUNT A{countContext.countState}</p>
    
            <button onClick={()=>countContext.countdispatch('inc')} >INCREMENT</button>
            <button onClick={()=>countContext.countdispatch('dec')}>DECREMENT</button>
            <button onClick={()=>countContext.countdispatch('res')}>RESET</button>

        </div>
    )
}

export default CF
