import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/css/Header.css';

class Header extends Component {
  render() {
    return (
    	<header>
	    	<nav className="main-nav">
	    		<h1><NavLink to="/">Matt Pezzente React Projects</NavLink></h1>
		     	<ul>
		        <li><NavLink to="/">Home</NavLink></li>
		        <li><NavLink to="/tool-1">Tool 1</NavLink></li>
		        <li><NavLink to="/tool-2">Tool 2</NavLink></li>
		        <li><NavLink to="/tool-3">Tool 3</NavLink></li>
		      </ul>
	      </nav>
      </header>
    )
  }
}

export default Header