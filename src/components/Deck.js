import React, { Component } from 'react';
import card from "../cardContent";
import Card from "./Card"

export default class Deck extends Component {
	state = {
			card: card,
			filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI',
			switched: false,
			showAll:true,
			toggleBusiness:false,
			toggleMarketing:false,
			toggleDesign:false,
			toggleProgram:false,
			toggleData:false,
			toggleUX:false,
	}
		
	
	toggleSwitch = () => {
		this.setState({ switched: !this.state.switched });
	  };


	changeBtnClr = (e) => {	
		if (e.target.value === 'Бизнис') {this.setState({toggleBusiness: !this.state.toggleBusiness})}
		if (e.target.value === 'Маркетинг') {this.setState({toggleMarketing: !this.state.toggleMarketing})}
		if (e.target.value === 'Дизајн') {this.setState({toggleDesign: !this.state.toggleDesign})}	
		if (e.target.value === 'Програмирање') {this.setState({toggleProgram: !this.state.toggleProgram})}
		if (e.target.value === 'Data Science') {this.setState({toggleData: !this.state.toggleData})}
		if (e.target.value === 'UX/UI') {this.setState({toggleUX: !this.state.toggleUX})}
	};


	clickHandler =(e) => {
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

	toggleButton = (e) => {
		this.changeBtnClr(e);
		this.clickHandler(e);
	};

	showAll = () => {
		this.setState({	showAll:true,
					  	filteredCard:'Бизнис, Маркетинг, Дизајн, Програмирање, Data Science, UX/UI',
					 	toggleBusiness:false,
						toggleMarketing:false,
						toggleDesign:false,
						toggleProgram:false,
						toggleUX:false,
						toggleData:false})
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
						<button className={this.state.toggleDesign?'white':''}type="button" value="Дизајн" onClick={this.toggleButton}>Дизајн</button>
						<button className={this.state.toggleUX?'white':''}type="button" value="UX/UI" onClick={this.toggleButton}>UX/UI</button>
						<button className={this.state.toggleMarketing?'white':''}type="button" value="Маркетинг" onClick={this.toggleButton}>Маркетинг</button>
						<button className={this.state.toggleData?'white':''}type="button" value="Data Science" onClick={this.toggleButton}>Data Science</button>
						<button className={this.state.toggleBusiness?'white':''}type="button" value="Бизнис" onClick={this.toggleButton}>Бизнис</button>
						<button className={this.state.toggleProgram?'white':''}type="button" value="Програмирање" onClick={this.toggleButton}>Програмирање</button>
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
