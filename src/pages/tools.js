import React from 'react'
class Tools extends React.Component{
    constructor() {
        super()
        this.state = { count: 0 }
    }
    render() {
        return(
          <div>
            <h1>Tools</h1>
            <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
          </div>
        )
    }
}
export default Tools