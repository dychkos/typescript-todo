import React from "react";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component{
    render(){
      return(
        <nav>
        <div className="nav-wrapper px-1 indigo lighten-1">
          <a href="/" className="brand-logo">UnReal GO</a>
          <ul className="right hide-on-med-and-down">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
           
          </ul>
        </div>
      </nav>
      )   
    }
}

export default Navbar;