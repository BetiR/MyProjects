import React, { Component } from 'react';
import card from "../cardContent";
import Card from "./Card"

export default class Deck extends Component {
	state = {
			card: card,
			filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI',
			switched: false,
			showAll:true,
			active:[ ]
	}
		
	
	toggleSwitch = () => {
		this.setState({ switched: !this.state.switched });
	  };

	clickHandler =(e) => {
		const value=e.target.value
		
		if (this.state.active.includes(value)){
			const array = [...this.state.active];
			const index = this.state.active.indexOf(value)
			array.splice(index, 1);
    		this.setState({active: array});
		}
		else {
			this.setState({ active: [...this.state.active, value] })
		}

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
							active:[]})
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
						<button className={this.state.active.includes('Дизајн')?'white':''}type="button" value="Дизајн" onClick={this.clickHandler}>Дизајн</button>
						<button className={this.state.active.includes('UX/UI')?'white':''}type="button" value="UX/UI" onClick={this.clickHandler}>UX/UI</button>
						<button className={this.state.active.includes('Маркетинг')?'white':''}type="button" value="Маркетинг" onClick={this.clickHandler}>Маркетинг</button>
						<button className={this.state.active.includes('Data Science')?'white':''}type="button" value="Data Science" onClick={this.clickHandler}>Data Science</button>
						<button className={this.state.active.includes('Бизнис')?'white':''}type="button" value="Бизнис" onClick={this.clickHandler}>Бизнис</button>
						<button className={this.state.active.includes('Програмирање')?'white':''}type="button" value="Програмирање" onClick={this.clickHandler}>Програмирање</button>
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
