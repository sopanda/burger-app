import React, {Component} from 'react';
import classes from './Toolbar.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import Logo from '../../Logo/Logo';

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
            <Navbar light expand="md">
            <NavbarBrand href="/">Burgerion</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className={classes.List + " ml-auto"} navbar>
                        <NavItem>
                            <NavLink href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}

export default Toolbar;
