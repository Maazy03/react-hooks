import React,{useState,useEffect} from 'react';
import axios from 'axios'

function Datafetching() {

const [post,setPost]=useState({});
const [id,setId]=useState(1);
const[idfrom,setidfrom]=useState(1)

useEffect(()=>
{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrom}`)
    .then(res=>{
        console.log("NIGGA",res)
        setPost(res.data)
    
    })
    .catch(err=>console.log(err))
    
},[idfrom])

const handleclick=()=>
{

    setidfrom(id)

}

    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleclick}>CLICK</button>
            <h1>{post.title}</h1>
            
            {/* <ul>
             {
                 posts.map(post=>(
                    
                        <li key={post.id}>
                            {post.title}
                        </li>
                 ))
             }
            </ul> */}
        </div>
    )
}

export default Datafetching
