import React from 'react';
import {Nav,NavItem, NavLink} from 'reactstrap';
import "../css/navigation.css";



const Navigation = ()=>{
    return(
        <div className='navigation'>
        <Nav>
            <NavLink className="nav-link" href ="Home">Home</NavLink>
            <NavLink className="nav-link" href ="About">Blog</NavLink>
            <NavLink className="nav-link" href ="Photo">Gallery</NavLink>
        </Nav>
    </div>)

}

export default Navigation;