import React from 'react'
import FRInput from './FRInput'

function FRParentInput() {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    clickHandler =() => {
        this.inputRef.current.focus()
    }
    
    return (
        <div>
            <FRInput ref = {this.inputRef}></FRInput>
            <button onClick={this.clickHandler}>focus input</button>
        </div>
    )
}

export default FRParentInput
