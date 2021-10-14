import React from "react"
import { Component } from "react";

export default class World extends Component {
    state = {
        linguagem: "React"
    };

    render() {
        return(
            <div className= "Text">
             <h1>Olá Mundo {this.state.linguagem}</h1>
             <h2>Esse é meu componente de classe</h2>
            </div>
        )
    }
}