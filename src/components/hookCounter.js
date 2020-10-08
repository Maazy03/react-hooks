import React,{useState} from 'react'

function HookCounter() {

    const initialCount = 0;
    const [count,setCount]=useState(initialCount);
const incrementFive= () =>
{

for(let i=0;i<5;i++)
{
    setCount(prevCount=>prevCount+1)
}

}   
 return (
        <div>
            <p>Count:{count}</p>
<button onClick={()=>setCount(initialCount)}>Count {count}</button>        
<button onClick={()=>setCount(prevCount=>prevCount+1)}>Count {count}</button>        
<button onClick={()=>setCount(prevCount=>prevCount-1)}>Count {count}</button>        
 <button onClick={incrementFive}>ICREMENT FIVE {count}</button>     
      
        </div>
    )
}

export default HookCounter;
