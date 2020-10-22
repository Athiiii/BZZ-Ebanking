import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand to="/demo" tag={Link}>BZZ Foodmarket</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                {
                                   
                                    localStorage.getItem("credentials") == null || localStorage.getItem("credentials") == "{}" ?
                                        <NavLink className="text-dark" to="/demo/login" tag={Link}>Login</NavLink> :
                                        (
                                            <Nav>
                                                <NavItem tag={Link} className="text-dark mx-4" to="/demo/dashboard">Dashboard</NavItem>
                                                <NavItem tag={Link} className="text-dark" to="/demo/login" >Logout</NavItem>
                                            </Nav>
                                        )
                                }
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header >
        );
    }
}
