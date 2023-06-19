import React from 'react'
import '../styles/Navbars.css';
import { Link } from 'react-router-dom';
import navimage from '../assets/navimage.png';
import TaskDuty from '../assets/TaskDuty.png';
import faceicon from '../assets/faceicon.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <div className='brand border border border-2'>
       <Navbar bg="" expand="lg" className=''>
      <Container className=''>
      <Link to='/'> <img className='mb-2 mt-3 icon1' src={navimage} alt="nav-brand" /></Link>
      <Link to='/'> <img className='mb-2 mt-3 icon2' src={TaskDuty} alt="nav-brand" /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end '>
          <Nav
            className="gap-4"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-decoration-none text-dark mt-3 mb-1 one' to='/NewTasks'>New Tasks</Link>
            <Link className='text-decoration-none text-dark mt-3 mb-1 one' to='/AllTasks'>All Tasks</Link>
            <Link to='/Edit'> <img src={faceicon} className='icon3 mt-1' alt="face-icon" /></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars