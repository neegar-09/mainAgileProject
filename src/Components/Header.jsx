import React from 'react'
import * as Icon from 'react-bootstrap-icons';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = (props) => {
  return (
    
      <Navbar fixed='top' expand="lg" style={{ backgroundColor: '#51B5C3', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', padding: '20px 60px' }}>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
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
              <NavDropdown.Item href="#action/3.1">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Licenses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Support</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>    
  )
}

export default Header