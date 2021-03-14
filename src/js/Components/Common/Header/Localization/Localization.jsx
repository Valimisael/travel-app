import React from 'react';
import { COMMON } from '../../../../Data/data';
import { ICONS } from '../../../../Data/media';
import './Localization.scss';

export default class Localization extends React.Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
    this.updateState = this.props.updateState.bind(this);
    this.state = {
      dropdown: false,
    }
  }

  changeLang = ({target}) => {
    this.settings.updateLang(target.innerText);
    this.updateState(this.settings);
    this.toggleDropdown();
  }

  toggleDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown,
    })
  }

  render () {
    const indexLanguage = Object.keys(COMMON).indexOf(this.settings.lang);
    const activeValue = COMMON[this.settings.lang].languages[indexLanguage];
    const options = COMMON[this.settings.lang].languages;

    return (
      <div className={`header__item localization ${this.state.dropdown ? 'open' : '' }`}>
        <button className="localization__select" onClick={this.toggleDropdown}>        
          <img src={ICONS[indexLanguage]} alt={activeValue} />
          <span>{activeValue}</span>
        </button>
        <ul className="localization__dropdown">
          {
            options.map((option, index) => {
              return(
                <li key={option} onClick={this.changeLang}>
                  <img src={ICONS[index]} alt={option} />
                  <span>{option}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}