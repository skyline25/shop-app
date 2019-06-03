import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class TestNested extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(`Nested component:`)
        console.log(this.props)
        return (
            <div>
                <h2>I'm nested element</h2>
                {/* <p>{test}</p> */}
            </div>
        )
    }
}

export default withRouter(TestNested)