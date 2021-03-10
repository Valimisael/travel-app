import React from 'react';
import '../../css/vendor/reset.css';
import '../../css/vendor/fontello.css';
import './App.scss';

import TravelApp from './TravelApp.jsx';
import Settings from '../Settings/Settings';

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
