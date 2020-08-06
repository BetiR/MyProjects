import React, { Component } from 'react';
import products from "../assets/ProductList";
import Card from './Card';

class CardDeck extends Component {
	constructor(){
		super();
		  this.state = {
            product: products,
            toCurrency: "USD",
            currencies: ["USD", "EUR", "CHF"],
            toPeriod:"Monthly",
            periods:["Monthly", "Annually", "2Years"],
      }
  }

  currencyConverter = event => {
      this.setState({ toCurrency: event.target.value }); 
  };

  periodHandler = event => {
      this.setState({ toPeriod: event.target.value }); 
  };

	render() {
		return (
          <div>

            <div className="dropdowns">
              <select
                      name="currency"
                      onChange={event => this.currencyConverter(event)}
                      value={this.state.toCurrency}>
                          {this.state.currencies.map(cur => (
                          <option key={cur}>{cur}</option>
                          ))};
              </select>
              <select
                      name="period"
                      onChange={event => this.periodHandler(event)}
                      value={this.state.toPeriod}>
                          {this.state.periods.map(per => (
                            <option key={per}>{per}</option>
                          ))}
              </select>
            </div>
          
          <div className="card-deck">
            {this.state.product.map(e => {
              return(
                      <Card
                            key={e.id}
                            id={e.id}
                            popularity={e.popularity}
                            name={e.name}
                            currency={e.currency[this.state.toCurrency]}
                            toCurrency={this.state.toCurrency}
                            price={e.price[this.state.toPeriod][this.state.toCurrency]}
                            toPeriod={this.state.toPeriod}
                            period={e.period[this.state.toPeriod]}
                            subtitle={e.subtitle}
                            users={e.users}
                            storage={e.storage}
                            address={e.address}
                            domain={e.domain}
                            options={e.options}
                            vpn={e.vpn}
                      />
                    )
            })}
          </div>
        </div>
		);
	}
}
export default CardDeck;