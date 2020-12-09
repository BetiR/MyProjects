import React, { Component } from 'react';
import card from "../cardContent";

export default class Details extends Component {

    render() {
        let selected = card.filter(el => el.id === parseInt(this.props.match.params.id))[0];

        let stars =[]
        for (var i = 0; i < card.stars; i++) {
			stars.push(<i className="fa fa-star"></i>);
		}

        return (
            <div className='Details'>
                            <div className="card-right">
                                <div className="card-title">
                                    <h3><b>Банер Наслов</b></h3>
                                </div>
                                <div className="card-text">
                                    <p><b>Банер Текст</b></p>
                                    <p>Consectetur voluptate ea qui velit eiusmod aliqua pariatur. Adipisicing consectetur labore Lorem amet adipisicing mollit reprehenderit consectetur esse cupidatat esse. Adipisicing elit velit nulla officia do nulla commodo dolor excepteur. Duis ex dolor tempor sint non eu fugiat voluptate.</p>
                                </div>
                                <button>Повеќе<span>></span></button>
                            </div>         
                {selected.lekciite.map((el) => {
                        return (
                            <a style={{ textDecoration: 'none', color: 'white' }} href={el.link}>
                            <div key={el.id} id={el.id} className="card">
                                <div className="card-body">
                                <button>{el.date}</button>
                                    <div className="card-title">
                                        <h3><b>{el.subtitle}</b></h3>
                                        
                                    </div>
                                    <div className="card-text">
                                        <p>{el.context}</p>
                                    </div>
                                    <div className='stars'>
                                    {el.stars}
                                    <span>    &#x2764;</span>
                                    </div>
                                    
                                </div>         
                            </div>
                            </a>
                        )
                    })}
                </div>
        )
    }
}

