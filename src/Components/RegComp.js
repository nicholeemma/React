import React, { Component } from 'react'

 class RegComp extends Component {
    render() {
        console.log("reg")
        return (
            <div>
                regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp
