import { Button, Input } from 'reactstrap';
import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    var input = localStorage.getItem("session") == null ? "" : localStorage.getItem("session")

    this.state = { input };
  }

  sessionChange(event) {
    this.setState({ input: event.target.value });
  }

  submit() {
    if (this.state.input === "") {
      fetch("/db")
        .then(response => response.text())
        .then(data => {
          console.log(data);
          localStorage.setItem("session", data);
          window.location = "/login"
        })

    } else {
      fetch("/db?session=" + this.state.input)
        .then(response => response.text())
        .then(data => {
          console.log(data);
          if (data !== null || data !== "") {
            localStorage.setItem("session", data);
            window.location = "/login"
          } else {
            localStorage.setItem("session", "");
          }
        })
    }
  }

  render() {
    return (
      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }} className="mt-5 pt-5">
        <Input value={this.state.input} className="mb-2" style={{ width: '350px' }} onChange={this.sessionChange.bind(this)} />
        <Button color="primary btn-lg" style={{ width: '350px' }} onClick={this.submit.bind(this)}>{this.state.input === "" ? "Create new Session" : "Use existing Session"}</Button>
      </div>
    );
  }
}
