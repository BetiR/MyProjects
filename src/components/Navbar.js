import React, { Component } from 'react';
import Modal from './Modal';

export default class Navbar extends Component {
 state = { show: false };
  

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render() {
    return (
        <nav>
          <a href="/"><img className="logo" src={require("../images/logo.png")} alt="logo"></img></a>
            <ul>
              <li><a href="https://brainster.co/">Академии</a></li>
              <li><a href="https://brainster.co/">Вебинари</a></li>
              <li><a href="https://brainster.co/">Тест за кариера</a></li>
              <li><a href="https://brainster.co/">Блог</a></li>
              <li><button type="button" onClick={this.showModal}>Пријави се</button></li>
            </ul>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
          </nav>
    );
  }
}




