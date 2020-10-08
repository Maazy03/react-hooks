import React,{useContext} from 'react';
import { CountContext } from '../App';


function CA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            <p>COMPONENT A</p>
    <p>COUNT A{countContext.countState}</p>
    
            <button onClick={()=>countContext.countdispatch('inc')} >INCREMENT</button>
            <button onClick={()=>countContext.countdispatch('dec')}>DECREMENT</button>
            <button onClick={()=>countContext.countdispatch('res')}>RESET</button>

        </div>
    )
}

export default CA
