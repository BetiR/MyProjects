import React, {Component} from 'react';
import Modal from './Modal'

export default class Banner extends Component {
    state = { show: false };
     
     showModal = () => {
       this.setState({ show: true });
     };
   
     hideModal = () => {
       this.setState({ show: false });
     };
   
   
     render() {
    
    return (
        <div className="banner">
            <h2>Приклучи се на 1350 ентузијасти и учи дигитални вештини.<br/> Бесплатно.<br/></h2>
            <div className="form">
                <input type="email" id="email" value="Email Address"></input>
                <button type="button" onClick={this.showModal}>Пријави се</button>
            </div>
            <p>Можеш да се исклучиш од листата на мејлови во секое време!</p>
            <Modal show={this.state.show} handleClose={this.hideModal}/>
        </div>
    )
}
}
