import React, { Component } from 'react'
import UpdatedComponemt from './WithCounter'

class HoverCounter extends Component {
    render() {
        // const {count} = this.state
        const { count , incrementCount } = this.props
        return (
            <div>
                <h2  onMouseOver={incrementCount}> Hovered {count} times</h2>
            </div>
        )
    }
}
//exporting the HOC
export default UpdatedComponemt(HoverCounter)