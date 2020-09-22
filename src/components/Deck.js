import React, { Component } from 'react';
import card from "../cardContent";
import Card from "./Card"

export default class Deck extends Component {
	state = {
			card: card,
			filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI',
			switched: false,
			showAll:true,
			}
	
	toggleSwitch = () => {
		this.setState({ switched: !this.state.switched });
	  };

	toggleButton =(e) => {
	const value=e.target.value
	if(this.state.showAll){
		const newFilteredCard=(value)
		this.setState({filteredCard:newFilteredCard})
		this.setState({showAll:false})
		return
	}
	this.setState({showAll:false})
	
	if (!this.state.filteredCard.includes(value)) {
		let newFilteredCard=this.state.filteredCard
		newFilteredCard+=value
		this.setState({filteredCard:newFilteredCard})
	} else {
		const newFilteredCard=this.state.filteredCard.replace(value,'')
		this.setState({filteredCard:newFilteredCard})
	}
	};

	showAll = () => {
		this.setState({showAll:true})
		this.setState({filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI'})
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
						<button type="button" value="Дизајн" onClick={this.toggleButton}>Дизајн</button>
						<button type="button" value="Маркетинг" onClick={this.toggleButton}>Маркетинг</button>
						<button type="button" value="UX/UI" onClick={this.toggleButton}>UX/UI</button>
						<button type="button" value="Data Science" onClick={this.toggleButton}>Data Science</button>
						<button type="button" value="Бизнис" onClick={this.toggleButton}>Бизнис</button>
						<button type="button" value="Програмирање" onClick={this.toggleButton}>Програмирање</button>
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
