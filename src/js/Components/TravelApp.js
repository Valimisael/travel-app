import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class TravelApp extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
  }
  
  render () {
    return (
      <div className="wrapper">
        <Header settings={this.settings} updateState={this.updateState}/>
        <Main settings={this.settings}/>
        <Footer />
      </div>
    )
  }
}