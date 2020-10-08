import React,{useState,useEffect} from 'react'
import axios from 'axios';
function Datafetching1() {

const [loading,setLoading]=useState(true)
const [error,setError]=useState('')
const [post,setPost]=useState({})

useEffect(() => {
    
    axios.get('https://jsonplaceholder.typiode.com/posts/1')
    .then(res=>
        {
            setLoading(false)
            setError('')
            setPost(res.data)
        })
    .catch(err=>
        {
            setLoading(true)
            setError("ERROR OCCURED")
            setPost({})
        })
}, [])


    return (
        <div>
            {loading ? 'loading' :post.title}
            {error ? error : null}
        </div>
    )
}

export default Datafetching1
