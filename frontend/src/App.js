import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input placeholder="Username" ref={r => this.input = r}></input>
          <div></div>
          <button onClick={this.login}>Login</button>
          <div>or</div>
          <button onClick={this.signUp}>Sign up</button>
          {/* {this.state.list.map(x => <li>{x}</li>)} */}

        </header>
      </div>
    );
  }
}

export default App;
