import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState =
{
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return ({
                loading: false,
                post: action.payload,
                error: null
            })
        case 'FETCH_FAIL':
            return ({
                loading: true,
                post: {},
                error: "ERROR OCCURED"
            })

        default:
            return state
    }
}



function DataFetching2() {

    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_FAIL' })
            })
    }, [])

    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}


        </div>
    )
}

export default DataFetching2
