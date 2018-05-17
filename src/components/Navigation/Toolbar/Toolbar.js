import React, {Component} from 'react';
import classes from './Toolbar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {NavLink as navLink } from 'react-router-dom';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import {withRouter} from 'react-router';

class Toolbar extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        home: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    
    render() {
        let navbarToggler = (this.props.location.pathname !== '/') ? <Auxiliary>
            <NavbarToggler className={classes.IconToggle} onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className={classes.List + " ml-auto"} navbar>
                    <NavItem>
                        <NavLink tag={navLink} to="/" exact className={classes.Link}>Home</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Auxiliary> : null;

        return(
        <div className={classes.Toolbar}>
            <Navbar dark expand="md" className={classes.Navbar + " container"}>
                <NavbarBrand tag={navLink} exact to="/" className={classes.Brand}>
                    Burgerion
                </NavbarBrand>
                {navbarToggler}
            </Navbar>
        </div>
        );
    }
}

export default withRouter(Toolbar);
