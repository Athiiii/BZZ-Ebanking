import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export class FmLogin extends Component {
  static displayName = FmLogin.name;

  state = {
    username: '', password: ''
  };

  constructor(props) {
    super(props);
    this.state = { username: "", password: "", msg: "" };
    localStorage.setItem("credentials", "{}");
    this.render();

  }

  login() {
    fetch("/login/login?username=" + this.state.username + "&password=" + this.state.password)
      .then(response => response.json())
      .then(data => {
        try {
          JSON.parse(JSON.stringify(data));
        } catch (e) {
          data = {}
        }
        if (Array.isArray(JSON.parse(JSON.stringify(data))) && JSON.parse(JSON.stringify(data)).length > 1) {
          var msg = "";
          data.map((cred) => msg += "\n- Failed to login");
          this.setState({ password: "", username: "", msg })
        }
        else if (JSON.stringify(data) == "{}" || JSON.stringify(data) == "[]") {
          localStorage.setItem('credentials', JSON.stringify("{}"))
          this.setState({ password: "", username: "", msg: "Invalid username or password" });
        } else {
          localStorage.setItem('credentials', JSON.stringify(data[0]))
          window.location = "/demo/dashboard";
        }
      });

  }

  passwordUpdate(event) {
    this.setState({ password: event.target.value })
  }

  userUpdate(event) {
    this.setState({ username: event.target.value })
  }


  render() {
    return (
      <section id="cover" className="min-vh-100">
        <div id="cover-caption">
          <div className="container">
            <div className="row text-white">
              <div className="mx-auto text-center form p-4 mt-5">
                <h4 className="display-4 py-2 text-truncate text-dark">Login to Foodmarket</h4>
                <div className="px-2">
                  <form action="" className="justify-content-center" style={{ display: 'inline-block', width: '100%' }}>
                    <div className="form-group">
                      <label className="sr-only">Name</label>
                      <input type="text" className="form-control" value={this.state.username} placeholder="username" onChange={this.userUpdate.bind(this)} />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input type="password" className="form-control" value={this.state.password} placeholder="password" onChange={this.passwordUpdate.bind(this)} />
                    </div>
                    <button type="button" className="btn btn-primary btn-lg float-right" onClick={this.login.bind(this)}>Login</button>
                  </form>
                </div>
                {
                  this.state.msg !== "" ?
                    <div className="mt-3">
                      <Alert color="danger">
                        <div>
                          {this.state.msg.split("\n").map((i, key) => <p style={{ marginBottom: 0, textAlign: 'left' }} key={key}>{i}</p>)}
                        </div>
                      </Alert>
                    </div >
                    : null
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
