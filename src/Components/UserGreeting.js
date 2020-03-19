import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    
    render() {
            
        return this.state.isLoggedIn && <div>welcome vishawa</div>

        // return (

            //conditional operator
            // this.state.isLoggedIn ?
            // <div>welcome vishawa</div> :
            // <div>welcome gusest</div>
        // )
    //     let message
    //     if (this.state.isLoggedIn) {
    //         message = <div>welcome vishiwa</div>
    //     } else {
    //         message = <div>welcome guset</div>
    //     }
    // return <div>{message}</div>

        // if(this.state.isLoggedIn) {
        //     return (
        //         <div> welcome vishawa</div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             welcome guset
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>
        //             welcome guest
        //         </div>
        //     <div>
        //         welcome vishawa
        //     </div>
        //     </div>
        // )
    }
}

export default UserGreeting
