import React from 'react'

export default function Modal (props) {

    return (
      <div className={props.show ? "modal display-block" : "modal display-none"}>
      
        <section id="dropdown">
            
        <ul>
        <button id="closeBtn" onClick={props.hideDropdown}><img src={require(`../images/closeBtn.png`)}/> </button>    
        <li><a href="https://brainster.co/">Академии</a></li>
        <li><a href="https://brainster.co/">Вебинари</a></li>
        <li><a href="https://brainster.co/">Тест за кариера</a></li>
        <li><a href="https://brainster.co/">Блог</a></li>
        <li><button type="button" onClick={props.showModal}>Пријави се</button></li>
      </ul>
        </section>
      </div>
    );
  };
