import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Icon from './icon';
export default function NavCst() {
  return (
    <div className='nav-parent fixed-top'>
      <Navbar collapseOnSelect className='container' expand='lg'>
        <Navbar.Brand href='#home'>
          <Icon name='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'></Nav>
          <Nav className='nav-right'>
            <Nav.Link className={`active fs14 lh17`} href='#deets'>
              Home
            </Nav.Link>
            <Nav.Link className={`fs14 lh17`} href='#deets'>
              Benefits
            </Nav.Link>
            <Nav.Link className={`fs14 lh17`} href='#deets'>
              Features
            </Nav.Link>
            <Nav.Link className={`fs14 lh17`} href='#deets'>
              Solutions
            </Nav.Link>
            <Nav.Link className={`fs14 lh24 fw500 btn btn-nav`} href='#deets'>
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
