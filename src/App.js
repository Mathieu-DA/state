import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";


const yes = logo;
const no = "https://media1.tenor.com/images/332a8572c0c2e76a43fc7d8058a516ab/tenor.gif?itemid=7884338";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { working: yes }
    this.handleClick = this.handleClick.bind(this);
  }


handleClick() {
  const workOrNot = this.state.working == yes ? no : yes;
  this.setState({ working: workOrNot });
};


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={this.state.working}
          className="App-logo"
          alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
      </header>


      <button
        onClick={this.handleClick}
      >WORKING OR NOT?
        </button>



      <Quote
        quote="I believe the children are the future... Unless we stop them now!"
        character="Homer Simpson"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
      />
      <Quote
        quote="Me fail English? That's unpossible"
        character="Ralph Wiggum"
        image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
      />
    </div>
  );
}
}

export default App;