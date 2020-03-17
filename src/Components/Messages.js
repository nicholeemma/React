import React, {Component} from 'react'

class Messages extends Component{

    constructor() {
        super() 
        this.state = {
            message: 'Welcome'
        }
    }
    changeMessage() {
        this.setState(
            {
                message:'thanks for subscribe'
            }
        )
    }
    render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() =>this.changeMessage()}>scribe</button>
        </div>
    )
    
    }
}
export default Messages;