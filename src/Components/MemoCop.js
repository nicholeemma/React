import React from 'react'

function MemoCop({name}) {
    console.log("rendering memo componenet")
    return (
        <div>
            {name}
        </div>
    )
}
//prevent rerendering
//higher order component
export default React.memo(MemoCop)
