import React, { Component } from 'react'

class Counter extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increment() {
        // do not change the state directly, it will not show on the UI
        // this.state.count =1+this.state.count
        // this.setState ({
        //     count : this.state.count + 1
        // }, () => {
        //     console.log('callback value', this.state.count)
        // })
        // // called before set  asychoronized statement 
        console.log(this.state.count)
        
        this.setState((preState, props) => ({
            count:preState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <div>
count - {this.state.count}
            </div>
            <button onClick={() => this.incrementFive()}>increment</button>
            </div>
            
        )
    }
}

export default Counter