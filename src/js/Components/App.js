import React from 'react';
import '../../css/vendor/reset.css';
import '../../css/vendor/fontello.css'
import '../../css/main.scss';
import TravelApp from './TravelApp';
import Settings from '../Classes/Settings';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.settings = new Settings();
    this.state = {
      settings: this.settings
    }
  }

  updateState(state) {
    this.setState ({
      settings: state
    });
  }

  render() {
    return (
      <div className="App">
        <TravelApp settings={this.settings} updateState={this.updateState}/>
      </div>
    );
  }
}
