import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import LoginButton from "./Components/login";
import LogoutButton from './Components/logout';

class Header extends React.Component {

  constructor(props){
    super(props)
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem  ><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.isAuth&&
        
        <NavItem ><Link to="/profile" className="nav-link">Show Profile</Link></NavItem>
        
        }
        <NavItem ><Link to="./About" className="nav-link">About</Link></NavItem>
        <LoginButton />
        <LogoutButton />
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
