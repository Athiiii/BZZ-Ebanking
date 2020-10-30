import { Button, Input, Table } from 'reactstrap';
import React, { Component } from 'react';

export class Dashboard extends Component {
  static displayName = Dashboard.name;

  constructor(props) {
    super(props);


    if (localStorage.getItem("session") === null || localStorage.getItem("session") === "")
      window.location = "/";

    if (localStorage.getItem("e-credentials") === "{}" || localStorage.getItem("e-credentials") === "[]" || localStorage.getItem("e-credentials") === "undefined"
      || localStorage.getItem("e-credentials") === null)
      window.location = "/login";

    this.state = { transactions: [] }
    this.getTransactions();
  }

  getTransactions() {
    var user = JSON.parse(localStorage.getItem("e-credentials"));
    fetch("api/transaction/" + localStorage.getItem("session") + "?username=" + user.Username + "&password=" + localStorage.getItem("password"))
      .then(response => response.json())
      .then(data => {
        this.setState({ transactions: JSON.parse(JSON.stringify(data)) });
      })
  }

  render() {
    var user = JSON.parse(localStorage.getItem("e-credentials"));
    var money = 0;
    this.state.transactions.map((amount) => money += amount.Price);

    return (
      <div>
        <p>Session: <b>{localStorage.getItem("session")}</b></p>
        <h1>E-Banking Dashboard</h1>
        <h3>Welcome {user.Firstname} {user.Lastname}</h3>
        <br></br>
        <br></br>
        <p>Account: {user.AccountName}</p>
        <h4>Balance: <span style={{ color: money < 0 ? 'red' : 'green' }}>{(Math.round((money + Number.EPSILON) * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'") + " CHF"}</span></h4>
        <Button color="secondary" className="mt-3 mb-1" onClick={this.getTransactions.bind(this)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="mr-1" fill="white"><path d="M0 0h24v24H0z" fill="none" /><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" /></svg>
          Refresh
          </Button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.transactions.map((amount, index) =>
                (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td><p style={{ color: amount.Price < 0 ? 'red' : 'green' }}>{amount.Price}</p></td>
                  </tr>
                ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
