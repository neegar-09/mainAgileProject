import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    
      <Navbar fixed='top' expand="lg" style={{ backgroundColor: '#51B5C3', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', padding: '20px 60px' }}>
        <Navbar.Brand href="#home" className='fw-bold text-light fs-4'>{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            {/* <img
            src="user-icon.png" // Replace with the URL of your user icon
            alt="user-icon"
            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
          /> */}
            <Icon.PersonFill style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
            <div>
              <div>Name Surname</div>
              <div>Username@agile.az</div>
            </div>
          </div>
          <Nav className="ml-auto">
            <NavDropdown title='Menu' id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/home">Dashboard</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/licenses">Licenses</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/support">Support</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>    
  )
}

export default Header