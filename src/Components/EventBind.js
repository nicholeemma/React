import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }
        // third method, official
        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler() {
 
    //         this.setState({
    //             message : "googbly"
    //         })
    //         // console.this ()
    
    // }

    // forth approach, class property as arrow function dont use,  due to  performance implication
    clickHandler = () => {
        this.setState( {
            message: 'googbu'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* first approach */}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* second approach */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
                 {/* third method */}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind
