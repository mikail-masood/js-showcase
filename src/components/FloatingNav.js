import React, { Component } from 'react'
import { Fab } from '@material-ui/core';
import './FloatingNav.css';

export class FloatingNav extends Component {
  render() {
    return (
      <div className="menu_btn">
        <Fab ariaLabel='Menu' className="menu_icon">
          <i className='fas fa-bars'></i>
        </Fab>
      </div>
    )
  }
}

export default FloatingNav
