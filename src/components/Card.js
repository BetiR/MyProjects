import React from 'react';
import {Link} from 'react-router-dom';



export default function Card (props){
	return (
        
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/CardDetails/${props.id}`}>
            <div key={props.id} id={props.id} className={`card ${props.filter.includes(props.title) ? "show" : "hide"}`}>
            <div className="card-header">
                    <img src={require(`../images/${props.title}.png`)} alt='img' />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <p><b>{props.title}</b></p>
                    </div>
                    <div className="card-text">
                        <p>{props.text}</p>
                    </div>
                    <button className="btn">{props.lekcii}</button>
                </div>         
            </div>
        </Link>
	);
}
