import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
    return (
            <nav>
                <a href="/"><img className="logo" src={require("../images/logo.png")} alt="logo"></img></a>
                <ul>
                  <li><a href="https://brainster.co/">Академии</a></li>
                  <li><a href="https://brainster.co/">Вебинари</a></li>
                  <li><a href="https://brainster.co/">Тест за кариера</a></li>
                  <li><a href="https://brainster.co/">Блог</a></li>
                  <li><button>Пријави се</button></li>
                </ul>
            </nav>
    )
  }
}
