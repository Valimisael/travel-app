import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Country from './Country';
import {BrowserRouter, Route} from 'react-router-dom';
import {countries} from '../Data/data';

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
          <Route exact path="/" render={(props) => <Main {...props} settings={this.settings} />} />
          {
            countries.map((country, index) => {
              return (
                <div key={index}>
                  <Route path={country.url} render={(props) => <Country {...props} settings={this.settings} country={country}  />} />
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