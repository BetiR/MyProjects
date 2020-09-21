import React, { Component } from 'react';
import card from "../cardContent";

export default class Details extends Component {

    render() {
        let selected = card.filter(el => el.id === parseInt(this.props.match.params.id))[0];

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
                                    <div className="card-title">
                                        <h3><b>{el.subtitle}</b></h3>
                                    </div>
                                    <div className="card-text">
                                        <p>{el.context}</p>
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

