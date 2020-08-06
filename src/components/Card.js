import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
	return (
        <Link to={`/CardDetails/${props.id}`}>

            <div className="card" key={props.id} id={props.id}>
                <div className="card-header text-center">
                    <h4 style={{color:"#5cb85c"}}><b>{props.popularity}</b></h4>
                </div>
                <div className="card-body text-center">
                    <div className="card-title">
                        <p><b>{props.name}</b></p>
                        <p>{props.currency} <span><b>{props.price}</b></span>{props.period}</p>
                        <p>{props.comment}</p>
                    </div>
                    <div className="card-subtitle text-center">
                        <h4>{props.subtitle}</h4>
                    </div>
                    <div className="card-text text-left">
                        <ul>
                            <li>{props.users}</li>
                            <li>{props.storage}</li>
                            <li>{props.address}</li>
                            <li>{props.domain}</li>
                            <li>{props.options}</li>
                            <li>{props.vpn}</li>
                        </ul>
                    </div>
                    <button className="btn">Select</button>
                </div>         
            </div>
        </Link>
	);
}
export default Card;