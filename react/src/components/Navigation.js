import React, { useEffect } from 'react';
import '../styles/Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

function Navigation() {
  const pageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Check if the URL contains the scrollTo parameter
    const params = new URLSearchParams(window.location.search);

    if (params.get('to') === 'contact') {
      setTimeout(() => {
        // Scroll to the #contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Adjust the delay as needed
    }

    if (params.get('to') === 'schedule') {
      setTimeout(() => {
        // Scroll to the #contact section
        const contactSection = document.getElementById('schedule');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Adjust the delay as needed
    }
  }, []);

  const handleContactClick = () => {
    // Check if the current URL contains "/services"
    if (window.location.pathname.includes('/services') || window.location.pathname.includes('/reviews')) {
      // If it does, navigate to "/?to=contact"
      window.location.href = '/lashes/?to=contact';
    } else {
      // If it doesn't, navigate to "#contact"
      window.location.href = '#contact';
    }
  };

  const handleScheduleClick = () => {
    // Check if the current URL contains "/services"
    if (window.location.pathname.includes('/services') || window.location.pathname.includes('/reviews')) {
      // If it does, navigate to "/?to=contact"
      window.location.href = '/lashes/?to=schedule';
    } else {
      // If it doesn't, navigate to "#contact"
      window.location.href = '#schedule';
    }
  };

  return (
    <Navbar expand="lg" bg="light">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
          <Nav className="me-auto">
            <Nav.Link href="/lashes/" onClick={pageUp}>
              <span className="option">HOME</span>
            </Nav.Link>
            <Nav.Link onClick={handleScheduleClick}>
              <span className="option">BUSINESS HOURS</span>
            </Nav.Link>
            <Nav.Link href="/lashes/services">
              <span className="option">PRICES</span>
            </Nav.Link>
            <Nav.Link href="/lashes/reviews">
              <span className="option">REVIEWS</span>
            </Nav.Link>
            <Nav.Link onClick={handleContactClick}>
              <span className="option">CONTACT</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
