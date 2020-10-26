import React, { Component } from 'react';
import Modal from './Modal';
import DropDownMenu from './DropDownMenu';

export default class Navbar extends Component {
 state = { show: false,
           dropdown:false };
  

  showModal = () => {
    this.setState({ show: true,
                    dropdown:false });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showDropdown = () => {
    this.setState({ dropdown: true });
  };

  hideDropdown = () => {
    this.setState({ dropdown: false });
  };


  render() {
    return (
        <nav>
          <a href="/"><img className="logo" src={require("../images/logo.png")} alt="logo"></img></a>
            <ul className="collapsibleNav">
              <li><a href="https://brainster.co/">Академии</a></li>
              <li><a href="https://brainster.co/">Вебинари</a></li>
              <li><a href="https://brainster.co/">Тест за кариера</a></li>
              <li><a href="https://brainster.co/">Блог</a></li>
              <li><button type="button" onClick={this.showModal}>Пријави се</button></li>
            </ul>
                <Modal show={this.state.show} handleClose={this.hideModal}/>
                <button id="burgerMenu" type="button" onClick={this.showDropdown}><img src={require(`../images/burgerMenu.png`)} alt="img"/></button>
                <DropDownMenu showF={this.state.dropdown} hideDropdown={this.hideDropdown} showModal={this.showModal} hideModal={this.hideModal} />
          </nav>
    );
  }
}




