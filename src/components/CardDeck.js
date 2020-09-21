import React, { Component } from 'react';
import card from "../cardContent";
import Card from "./Card"

export default class CardDeck extends Component {
    constructor(){
		super();
		  this.state = {
            card: card,
      }
  }

  render() {
        return (
            <div className="CardDeck">
                        {this.state.card.map(element => {
                        return(
                                <Card
                                    key={element.id}
                                    id={element.id}
                                    title={element.title}
                                    text={element.text}
                                    lekcii={element.lekcii}
                                    
                                />
                                )
                        })}
            </div>
        )
    }
}
