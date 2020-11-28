import React, { Component } from 'react'
import { Fab } from '@material-ui/core';
import './FloatingNav.css';

export class FloatingNav extends Component {
  render() {
    return (
      <div>
        <Fab className="menu_button">
          <i className='fas fa-bars'></i>
        </Fab>
      </div>
    )
  }
}

export default FloatingNav
