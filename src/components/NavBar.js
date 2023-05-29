import {Navbar, Container,Nav} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon1.svg';
export const NavBar=()=> {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scroll>50){
                setScrolled(true);
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);

    }, [])

    const onUpdadeActiveLink = (value) =>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ?"scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
         </Navbar.Toggle>   
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdadeActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skill' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdadeActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="projects" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdadeActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#home"><img src={navIcon1} alt="#home"/></a>
                <a href="#skills"><img src={navIcon2} alt="#skills"/></a>
                <a href="#projects"><img src={navIcon3} alt="#projects"/></a>
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connet</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

