import React, { Component } from 'react'
import UpdatedComponemt from './WithCounter'

class ClickCouner extends Component {
    render() {
        // const { count } = this.state
        const { count , incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponemt(ClickCouner)