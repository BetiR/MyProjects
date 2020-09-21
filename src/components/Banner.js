import React from 'react'

export default function Banner() {
    return (
        <div className="banner">
            <h2>Приклучи се на 1350 ентузијасти и учи дигитални вештини.<br/> Бесплатно.<br/></h2>
            <div className="form">
            <input type="email" id="email" value="Email Address"></input>
            <input type="submit" id="subbut" value="Пријави се"></input>
            </div>
            <p>Можеш да се исклучиш од листата на мејлови во секое време!</p>
        </div>
    )
}
