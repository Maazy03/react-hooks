import React,{useContext} from 'react';
import { CountContext } from '../App';


function CD() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <p>COMPONENT D</p>
            <p>COUNT A{countContext.countState}</p>
    
            <button onClick={()=>countContext.countdispatch('inc')} >INCREMENT</button>
            <button onClick={()=>countContext.countdispatch('dec')}>DECREMENT</button>
            <button onClick={()=>countContext.countdispatch('res')}>RESET</button>

        </div>
    )
}

export default CD
