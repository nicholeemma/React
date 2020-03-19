import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('button clicked')
    }
    return (
        <div>
            {/* event handler is a function not a function call, do not add parathesis */}
         <button onClick = {clickHandler}>click</button>   
        </div>
    )
}

export default FunctionClick
