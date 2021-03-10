import React from 'react';
import Header from './Common/Header.jsx';
import Footer from './Common/Footer.jsx';
import Home from './Home/Home.jsx';
import Country from './Country/Country.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import { COUNTRIES } from '../Data/data';

export default class TravelApp extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header settings={this.settings} updateState={this.updateState}/>
          <Route exact path="/" render={(props) => <Home {...props} settings={this.settings} />} />
          {
            COUNTRIES.map((country) => {
              return (
                <div key={country.name}>
                  <Route path={country.url} render={(props) => <Country {...props} settings={this.settings} country={country} updateState = {this.updateState}/>} />
                </div>
              ) 
            })
          }
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}