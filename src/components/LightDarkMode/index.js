// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    isDarkMode: background.color:black;,
  }

  onLightModes = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state
    // eslint-disable-next-line no-unused-vars
    const modelClassName = isDarkMode ? 'dark-mode' : 'Light-mode'
    // eslint-disable-next-line no-unused-vars
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const buttonText = this.getButtonText()

    return (
      <div className="app-container">
        <div className="container ${modelClassName">
          <h1 className="heading">Click Change To Mode</h1>
          <button
            type="button"
            className="button-container"
            onClick={this.onLightModes}
          >
            Light Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
