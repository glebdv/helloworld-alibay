import React, { Component } from 'react';

export class Login extends Component {
  constructor() {
    super();
    this.state = { login: false, signIn: false, username: "", password: "", email: "" }
  }

  login = () => {
    var user = this.username.value
    var pass = this.password.value
    fetch('/login', {
      method: 'post',
      body: {
        username: user,
        password: pass
      }
    })
    .then(x => x.text())
    .then(x=> JSON.parse(x))
    .then(x => this.setState({login: x})
    )
    if(!this.state.login) {
      console.log("Please check your username and password!");
      return "Please check your username and password!"
    } 
  }

  signUp = () => {
    var user = this.username.value
    var pass = this.password.value
    var mail = this.email.value
    fetch('/signUp', {
      method: 'post',
      body: {
        username: user,
        password: pass,
        email: mail
      }
    })
    .then(x => x.text())
    .then(x => JSON.parse(x))
    .then(x => this.setState({login: x}))
  }

  signupNow = () => {
    this.setState({signIn: true})
  }
  signupPage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <div className="loginInput">
            <input className="username" placeholder="username" ref={r => this.username = r}></input>
            <input className="password" placeholder="password" ref={r => this.password = r}></input>
            <input className="email" placeholder="email" ref={r => this.email = r}></input>
          </div>
          <button onClick={this.signUp}>Sign up</button>
          {/* {this.state.list.map(x => <li>{x}</li>)} */}

        </header>
      </div>
    )
  }

  loginPage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <div className="loginInput">
            <input className="username" placeholder="username" ref={r => this.username = r}></input>
            <input className="password" placeholder="password" ref={r => this.password = r}></input>
          </div>
          <button id="loginButtons" onClick={this.login}>Login</button>
          <div>or</div>
          <button onClick={this.signupNow}>Sign up</button>
          {/* {this.state.list.map(x => <li>{x}</li>)} */}

        </header>
      </div>
    )
  }

  render() {
    if(!this.state.login) {
    return (
      <div>
        {this.state.signIn ? this.signupPage() : this.loginPage()}
      </div>
    )
    } else {
      return (
      <div>
        You have successfully logged in!
      </div>
      )
    }
  }
}
