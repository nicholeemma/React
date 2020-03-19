import React from 'react'

// function Greet() {
//     return <h1>hello ni</h1>
// }

const Greet = props => {
    const {name, heroName} = props
    // console.log(props)
return (
    // return only one html element
    <div>
    <h1>hello {name} a.k.a {heroName}</h1>
    {/* {children} */}
    </div>
    )
}

export default Greet;