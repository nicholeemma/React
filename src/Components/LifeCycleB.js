import React, { Component } from 'react'

class LifeCycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Vishawa'
        }
        console.log('Lifecycle b')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('B get derived')
        return null
    }
    
    componentDidMount() {
        console.log('lifecycleb componentdidmount')
    }
    shouldComponentUpdate() {
        console.log("B update")
        return true
    }
    
    getSnapshotBeforeUpdate (prevPros, prevState) {
        console.log("B snap")
        return null
    }

    componentDidUpdate() {
        console.log("lifecycle b component did update")
    }
    render() 
    {
        console.log('render b')
        return (
            <div>
               Lifecycle 
            </div>
        )
    }
}

export default LifeCycleB
