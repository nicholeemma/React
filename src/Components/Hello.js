import React from 'react'

const hello = () => {
    // return (
    //     <div>
    //         <h1>hello jswa</h1>
    //     </div>
    // )
    return React.createElement('div', 
                                {id : "id1", className : "dummyclass"}, 
                                React.createElement('h1',null, 'hallobisk'))
}

export default hello