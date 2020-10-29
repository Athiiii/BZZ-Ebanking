import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../../custom.css'


export class Foodmarket extends Component {
  static displayName = Foodmarket.name;

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      dropdownCategorySelected: "",
      dropdownCategoryList: [],
      readingData: [],
      search: ""
    };

    if (localStorage.getItem("credentials") === "{}" || localStorage.getItem("credentials") === "[]" || localStorage.getItem("credentials") === "undefined"
      || localStorage.getItem("credentials") === null)
      window.location = "/demo/login";

    this.readCategories()
  }

  readCategories() {
    fetch("api/category")
      .then(response => response.json())
      .then(data => {
        this.setState({ dropdownCategoryList: data, dropdownCategorySelected: data[0] })
      });
  }

  readCategories() {
    fetch("api/category")
      .then(response => response.json())
      .then(data => {
        this.setState({ dropdownCategoryList: data, dropdownCategorySelected: data[0] })
      });
  }

  toggle() {
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen })
  }

  selectCategory(event) {
    this.setState({ dropdownCategorySelected: event.target.value });
  }

  searchChange(event) {
    this.setState({ search: event.target.value });
  }

  search() {
    fetch("api/menu?category=" + this.state.dropdownCategorySelected + "&search=" + this.state.search)
      .then(response => response.json())
      .then(data => {
        this.setState({ readingData: data });
      });
  }


  render() {
    const { dropdownCategoryList, dropdownCategorySelected, readingData } = this.state;
    try {
      var username = localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")).Username : "";
      var role = localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")).IsAdmin : false;
    } catch (ex) {
      window.location = "/demo/login";
    }

    return (
      <div>
        <h1>Foodmarket - Dashboard</h1>
        <h3>Welcome {username} ({role ? "Admin" : "User"})</h3>
        <br></br>
        <br></br>
        <Input type="text" className="mt-1" style={{ width: '500px' }} onChange={this.searchChange.bind(this)}></Input>
        <span style={{ display: 'flex' }} className="mt-1">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle.bind(this)}>
            <DropdownToggle caret style={{ width: '300px', textAlign: 'left' }}>{dropdownCategorySelected}</DropdownToggle>
            <DropdownMenu style={{ overflowY: 'scroll', height: '200px' }}>
              <Input type="text" className="ml-3" style={{ width: '95%' }} value={dropdownCategorySelected} onChange={this.selectCategory.bind(this)}></Input>
              {
                dropdownCategoryList.map((category) => (
                  <DropdownItem key={Math.random()} onClick={this.selectCategory.bind(this)} value={category}>{category}</DropdownItem>
                ))
              }
            </DropdownMenu>
          </Dropdown>
          <Button color="primary" className="ml-1" style={{ width: '196px' }} onClick={this.search.bind(this)}>Search</Button>
        </span>
        <span>
          <div style={{ marginTop: '1rem' }}>
            {
              readingData.map((menu) =>
                <Card className="mt-2" key={Math.random()}>
                  <CardBody>
                    <CardTitle>
                      {menu.Name}
                      {
                        role ?
                          <div style={{ display: 'inline', float: 'right', cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="demo-edit mr-2" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="demo-edit" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
                          </div>
                          : null
                      }
                    </CardTitle>
                    <CardSubtitle>{menu.Category}</CardSubtitle>
                    <CardBody className="pl-0 py-1">Costs: {menu.Price} CHF</CardBody>
                  </CardBody>
                </Card>
              )
            }
          </div>
        </span>
      </div>
    );
  }
}
