import React from 'react'

export default function Modal (props) {

    return (
      <div className={props.show ? "modal display-block" : "modal display-none"}>
      
        <section className="modal-main">
        <button id="closeBtn" onClick={props.handleClose}><img src={require(`../images/closeBtn.png`)}/> </button>        
                <h2>Пријави се</h2>
                <label>Име и презиме</label>
                <input type="наме" className="input" value="Име и презиме"></input>
                <br/> <br/>
                <label>e-mail</label>
                <input type="email" className="input" value="Email Address"></input>
                <br/> <br/>
                <button type="submit">Испрати</button>
        
        </section>
      </div>
    );
  };
