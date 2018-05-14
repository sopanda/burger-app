import React, {Component} from 'react';
import classes from './Toolbar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {NavLink as navLink } from 'react-router-dom';

class Toolbar extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    
    render() {
        return(
        <div className={classes.Toolbar}>
            <Navbar dark expand="md" className={classes.Navbar + " container"}>
                <NavbarBrand tag={navLink} exact to="/" className={classes.Brand}>
                    Burgerion
                </NavbarBrand>
                <NavbarToggler className={classes.IconToggle} onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className={classes.List + " ml-auto"} navbar>
                            <NavItem>
                                <NavLink tag={navLink} to="/" exact className={classes.Link}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={navLink} to="/about" exact className={classes.Link}>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={navLink} to="/contact" exact className={classes.Link}>Contact us</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Toolbar;
