import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavBar extends Component {

  render() {

    return (
      <div className="NavBar">

<Navbar brand='Laly MakeUp' right className="blue">
  <NavItem href="/about">About Us</NavItem>
  <NavItem href="/complete">Users</NavItem>
</Navbar>

      </div>   
    );
  }
}

export default NavBar;


