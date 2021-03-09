import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Country from './Country';

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
        {/* <Main settings={this.settings}/> */}      
        <Country settings={this.settings}/>
        <Footer />
      </div>
    )
  }
}