import React, {Component} from 'react';
import products from "../assets/ProductList";

class CardDetails extends Component {

	render() {
		let product = products.filter(el => el.id === parseInt(this.props.match.params.id))[0];	
			return (
				<div className="cardDetails text-center">
					<h2><b>{product.name}</b></h2>
					<p>{product.currency.USD} <span><b>{product.price.Monthly.USD}</b></span>{product.period.Monthly}</p>
					<h4><b>{product.subtitle}</b></h4>
					<ul>
						<li>{product.users}</li>
						<li>{product.storage}</li>
						<li>{product.address}</li>
						<li>{product.domain}</li>
						<li>{product.options}</li>
						<li>{product.vpn}</li>
					</ul>
					<button className="button">Sign In</button>
				</div>
			);
	}
}
export default CardDetails;