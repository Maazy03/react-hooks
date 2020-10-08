import React from 'react'

function Counts({count,text}) {
    console.log(`rendering ${text}`)
    return (
        <div>
            {text}-{count}
        </div>
    )
}

export default React.memo(Counts)
