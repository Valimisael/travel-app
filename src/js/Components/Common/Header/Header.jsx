import React from 'react';
import './Header.scss';

import { Route } from 'react-router-dom';
import { LOGOS} from '../../../Data/media';
import { NavLink } from 'react-router-dom';
import Search from './Search/Search';
import Localization from './Localization/Localization';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
  }
  
  render () {    
    return (
      <header className="header">
        <NavLink to="/" className="header__item logo">
          <img className="logo__image" alt="Logo" src={LOGOS.headerLogo} />
        </NavLink>
        <div className="settings">
          <Route exact path="/" render={(props) => <Search {...props} settings={this.settings} updateState={this.updateState} />} />
          <Localization settings={this.settings} updateState={this.updateState}  />
        </div>
      </header>
    )
  }
}