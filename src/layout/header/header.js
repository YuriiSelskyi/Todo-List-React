import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {PATHS} from "../../constants/routes";

class Header extends Component {
  render () {
    return <header className="header"><h3 className="titles">
      <Link to={PATHS.INDEX}>Home</Link>
      <Link to={PATHS.TODOS}>TODOS</Link>
      <Link to={PATHS.SING_UP}>SING_UP</Link>
      <Link to={PATHS.LOGIN}>LOGIN</Link></h3>
    </header>
  }
}

export default Header;
