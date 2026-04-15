import React from 'react';  
import { Nav } from 'react-bootstrap';  
import { LinkContainer } from 'react-router-bootstrap';  
import { HouseFill, Dice5Fill, ChatDotsFill, PeopleFill, PersonFill } from 'react-bootstrap-icons';  

function BottomNav() {  
  return (  
    <Nav className="navbar fixed-bottom navbar-dark bg-dark">  
      <Nav.Item>  
        <LinkContainer to="/">  
          <Nav.Link><HouseFill size={24} /></Nav.Link>  
        </LinkContainer>  
      </Nav.Item>  
      <Nav.Item>  
        <LinkContainer to="/fun">  
          <Nav.Link><Dice5Fill size={24} /></Nav.Link>  
        </LinkContainer>  
      </Nav.Item>  
      <Nav.Item>  
        <LinkContainer to="/chat">  
          <Nav.Link><ChatDotsFill size={24} /></Nav.Link>  
        </LinkContainer>  
      </Nav.Item>  
      <Nav.Item>  
        <LinkContainer to="/groups">  
          <Nav.Link><PeopleFill size={24} /></Nav.Link>  
        </LinkContainer>  
      </Nav.Item>  
      <Nav.Item>  
        <LinkContainer to="/profile">  
          <Nav.Link><PersonFill size={24} /></Nav.Link>  
        </LinkContainer>  
      </Nav.Item>  
    </Nav>  
  );  
}  

export default BottomNav;