import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureCompo from './PureCompo'
import MemoCop from './MemoCop'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'vishiwa'
        }
    }
   
    componentDidMount() {
        setInterval(() => {
        this.setState({
            name: 'vishawa'
        })
    }, 2000)
}

    render() {
        console.log("parent")
        return (
            <div>
               Parent Component 
               {/* <RegComp name={this.state.name}></RegComp>
                <PureCompo name = {this.state.name}></PureCompo> */}
                <MemoCop name={this.state.name}></MemoCop>
            </div>
        )
    }

}

export default ParentComp
