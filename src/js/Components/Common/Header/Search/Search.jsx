import React from 'react';
import './Search.scss';
import { COMMON } from '../../../../Data/data';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
  }

  handleChange = ({target}) => {
    this.settings.updateSearch(target.value);
    this.updateState(this.settings);
  }

  handleReset = (event) => {
    event.preventDefault();
    this.settings.updateSearch('');
    this.updateState(this.settings);
  }

  handleClick = (event) => {
    event.preventDefault();
    this.updateState(this.settings);
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.settings.updateSearch(event.target.value);
      this.updateState(this.settings.search);
    }
  }

  render () {
    const placeHolder = COMMON[this.settings.lang].placeHolder;
  
    return (
      <div className="header__item search">
        <form className="search__field">
          <input id="search" type="search" placeholder={placeHolder} autoComplete="off" autoFocus={true} onChange={this.handleChange} onKeyPress={this.handleKeyPress} value={this.settings.search} />
          <button className="icon icon-cancel" onClick={this.handleReset}></button>
          <button className="icon icon-search" onClick={this.handleClick}></button>
        </form>
      </div>
    )
  }
}