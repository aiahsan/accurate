import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Icon from './icon';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
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
            <Link
              activeclass='active'
              to='home'
              spy={true}
              smooth={true}
              duration={250}
              className={`fs14 lh17 nav-link`}
            >
              Home
            </Link>
            <Link
              className={`fs14 lh17 nav-link`}
              to='Benefits'
              spy={true}
              smooth={true}
              duration={250}
              activeclass='active'
            >
              Benefits
            </Link>

            <Link
              className={`fs14 lh17 nav-link`}
              to='Features'
              spy={true}
              smooth={true}
              duration={250}
              activeclass='active'
            >
              {' '}
              Features
            </Link>
            <Link
              className={`fs14 lh17 nav-link`}
              to='Solutions'
              spy={true}
              smooth={true}
              duration={250}
            >
              Solutions
            </Link>
            <Link
              className={`fs14 lh24 fw500 btn btn-nav nav-link`}
              to='Contact'
              spy={true}
              smooth={true}
              duration={250}
            >
              Contact us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
