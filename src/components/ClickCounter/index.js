// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  Increase = () => {
    this.setState(sk => ({count: sk.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="ok">
        <h1>
          The Button has been clicked <br />
          <span>{count}</span>times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="sk" onClick={this.Increase}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
