import React from 'react'
import { TiSpiral } from "react-icons/ti";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <div>
        <Navbar className=''>
            <Container>
                <Navbar.Brand>Donezo</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header