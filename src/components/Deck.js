import React, { Component } from 'react';
import card from "../cardContent";
import Card from "./Card"

export default class Deck extends Component {
	state = {
			card: card,
			filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI',
			switched: false,
			showAll:true,
			business:false,
			marketing:false,
			design:false,
			program:false,
			data:false,
			ux:false,
	}
		
	
	toggleSwitch = () => {
		this.setState({ switched: !this.state.switched });
	  };

	clickHandler =(e) => {
		const value=e.target.value

		if (value === 'Бизнис') {this.setState({business: !this.state.business})}
		if (value === 'Маркетинг') {this.setState({marketing: !this.state.marketing})}
		if (value === 'Дизајн') {this.setState({design: !this.state.design})}	
		if (value === 'Програмирање') {this.setState({program: !this.state.program})}
		if (value === 'Data Science') {this.setState({data: !this.state.data})}
		if (value === 'UX/UI') {this.setState({ux: !this.state.ux})}

		if(this.state.showAll){
			let newFilteredCard=value
			this.setState({filteredCard:newFilteredCard})
			this.setState({showAll:false})
			return
		}		
		
		if (!this.state.filteredCard.includes(value)) {
			let newFilteredCard=this.state.filteredCard
			newFilteredCard+=value
			this.setState({filteredCard:newFilteredCard})
		} 
		
		else {
			let newFilteredCard=this.state.filteredCard.replace(value,'')
			this.setState({filteredCard:newFilteredCard})
		}

		};


	showAll = () => {
		this.setState({	showAll:true,
					  	filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI',
					 	business:false,
						marketing:false,
						design:false,
						program:false,
						ux:false,
						data:false})
	}
	

	render() {
		const { switched } = this.state;
		return (
			<div>
				<div className="Filters">
					<div className="FilterTitle">
						<h3>Филтрирај по категорија</h3>
						<input
						onClick={this.toggleSwitch}
						className="react-switch-checkbox"
						id={`react-switch-new`}
						type="checkbox"
						/>
						<label
							className="react-switch-label"
							htmlFor={`react-switch-new`}
						>
							<span className={`react-switch-button`} />
						</label>
					</div>
				
					<div className="buttons">
						<button className={this.state.design?'white':''}type="button" value="Дизајн" onClick={this.clickHandler}>Дизајн</button>
						<button className={this.state.ux?'white':''}type="button" value="UX/UI" onClick={this.clickHandler}>UX/UI</button>
						<button className={this.state.marketing?'white':''}type="button" value="Маркетинг" onClick={this.clickHandler}>Маркетинг</button>
						<button className={this.state.data?'white':''}type="button" value="Data Science" onClick={this.clickHandler}>Data Science</button>
						<button className={this.state.business?'white':''}type="button" value="Бизнис" onClick={this.clickHandler}>Бизнис</button>
						<button className={this.state.program?'white':''}type="button" value="Програмирање" onClick={this.clickHandler}>Програмирање</button>
						<button type="button" value="Сите" onClick={this.showAll}>Сите</button>
					</div>  
				</div>	
			
				<div className={`CardDeck ${switched?"cardOff":"cardOn"}`}>
				
				{this.state.card.map(element => {
						return(
							<Card
								key={element.id}
								id={element.id}
								title={element.title}
								text={element.text}
								lekcii={element.lekcii}
								filter={this.state.filteredCard}
							/>
						)
				})}
				</div>
			</div>	
		)
	}
}
