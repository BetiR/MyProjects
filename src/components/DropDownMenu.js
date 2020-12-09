import React from 'react';
import Modal from './Modal';

export default function DropDownMenu (props) {

    return (
      <div className={props.showF ? "modal display-block" : "modal display-none"}>
        <section id="dropdown">  
            <ul>
            <button id="closeBtn" onClick={props.hideDropdown}><img src={require(`../images/closeBtn.png`)} alt="img"/> </button> 
            <a href="/"><img className="logo" src={require("../images/logo.png")} alt="logo"></img></a>
            <br></br>
            <li><a href="https://brainster.co/">Академии</a></li>
            <li><a href="https://brainster.co/">Вебинари</a></li>
            <li><a href="https://brainster.co/">Тест за кариера</a></li>
            <li><a href="https://brainster.co/">Блог</a></li>
            <li><button type="button" onClick={props.showModal}>Пријави се</button></li>
            </ul>
        </section>
        <Modal/>
      </div>
    );
  };
