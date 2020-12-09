import React from 'react'

export default function Modal (props) {

    return (
      <div className={props.show ? "modal display-block" : "modal display-none"} >
        <section className="modal-main">
        <button id="closeBtn" onClick={props.handleClose}><img src={require(`../images/closeBtn.png`)} alt="img"/> </button>        
                <h2>Пријави се</h2>
                <label>Име и презиме</label>
                <input type="name" className="input" value="Име и презиме"></input>
                <br/> <br/>
                <label>e-mail</label>
                <input type="email" className="input" value="e-mail"></input>
                <br/> <br/>
                <label>Телефон</label>
                <input type="phone" className="input" value="Телефон"></input>
                <br/> <br/>
                <button type="submit">Испрати</button>
        </section>
      </div>
    );
  };
