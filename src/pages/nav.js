import React from 'react';
import {Nav,NavItem, NavLink} from 'reactstrap';
import {Link,BrowserRouter} from "react-router-dom";
import "../css/navigation.css";



const Navigation = ()=>{
    return(
        <div className='navigation'>
        <Nav>
            <Link className="nav-link" to ="/">Home</Link>
            <Link className="nav-link" to ="/About">Blog</Link>
            <Link className="nav-link" to ="/Photo">Gallery</Link>
        </Nav>
    </div>)

}

export default Navigation;