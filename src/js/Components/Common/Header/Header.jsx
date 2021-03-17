import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import { Route } from 'react-router-dom';
import { HEADER} from '../../../Data/data';
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
          <img className="logo__image" alt="Logo" src={HEADER.logo} />
          <h1 className="logo__title">{HEADER.title}</h1>
        </NavLink>
        <div className="settings">
          <Route exact path="/">
            <Search settings={this.settings} updateState={this.updateState} />
          </Route>
          <Localization settings={this.settings} updateState={this.updateState}  />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  settings: PropTypes.shape({
    lang: PropTypes.string,
    search: PropTypes.string
  }),
  updateState: PropTypes.func
};