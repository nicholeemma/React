import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Vishawa'
        }
        console.log('Lifecycle a')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('A get derived')
        return null
    }
    
    componentDidMount() {
        console.log('lifecyclea componentdidmount')
    }

    shouldComponentUpdate() {
        console.log("A update")
        return true
    }
    
    getSnapshotBeforeUpdate (prevPros, prevState) {
        console.log("A snap")
        return null
    }

    componentDidUpdate() {
        console.log("lifecycle a component did update")
    }
    changeState = () => {
        this.setState({
            name: 'codecolution'
        })
    }
    render() 
    {
        console.log('render')
        return (
            <div>
                <LifeCycleB></LifeCycleB>
            <div>
               Lifecycle 
            </div>
            <button onClick={this.changeState}>change state</button>
            </div>
        )
    }
}

export default LifeCycleA
