import React from 'react';
import CurrencyCounter from '../Classes/CurrencyCounter';

export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.settings = this.props.settings;
        this.country = this.props.country;
        this.updateState = this.props.updateState.bind(this);
        this.stateCallback = this.stateCallback.bind(this);
        this.currency = new CurrencyCounter(this.settings.lang, this.country, this.stateCallback);
    }

    stateCallback() {
        this.updateState(this.settings);
    }


    render() {
        this.currency.updateLanguage(this.settings.lang);
        return (
            <table className="currency">
                <thead>
                    <tr>
                        <th></th>
                        <th>{this.currency.localCurrencyName}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.currency.currenciesNames.euro}</td>
                        <td>{this.currency.currencies.euro}</td>
                    </tr>
                    <tr>
                        <th>{this.currency.currenciesNames.dollar}</th>
                        <td>{this.currency.currencies.dollar}</td>
                    </tr>
                    <tr>
                        <th>{this.currency.currenciesNames.ruble}</th>
                        <td>{this.currency.currencies.local}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
 