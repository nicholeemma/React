import React, { PureComponent } from 'react'

class pureCompo extends PureComponent {
    render() {
        console.log("pure")
        return (
            <div>
               pure component {this.props.name} 
            </div>
        )
    }
}

export default pureCompo
