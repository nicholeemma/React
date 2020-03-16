import React from 'react'

// function Greet() {
//     return <h1>hello ni</h1>
// }

const Greet = (props) => {
    console.log(props)
return (
    // return only one html element
    <div>
    <h1>hello {props.name} a.k.a {props.heroname}</h1>
    {props.children}
    </div>
    )
}

export default Greet;