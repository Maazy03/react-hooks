import React from 'react'

function Title() {
    console.log("RENDERING TITLE")
    return (
        <div>
            USE CALL BACK
        </div>
    )
}

export default React.memo(Title)
