import React,{ Component} from 'react';
//import HeaderComponent from './pages/header.js';
import About from './about';
import Photo from './photo';
import Home from './Home';
import {Navbar,Nav} from 'react-bootstrap';
import Image from "../resources/coffee_lover.jpg";
import { Route,BrowserRouter, Switch} from 'react-router-dom';
import navStyle from "../css/navigation.css";


//import { url } from 'inspector';



const Navigation = () =>{
    return(
       
    <div className="text-center" style={{paddingTop:'2%'}}>
			<ul style={{listStyleType:'none', display:'inline-block'}}>
                <Nav.Link href ="Home">Home</Nav.Link>
                <Nav.Link href ="About">Blog</Nav.Link>
                <Nav.Link href ="Photo">Gallery</Nav.Link>
				
					{/* <a href = # id = "firstjava"><li class = "shake"> Home</li>	</a>
					<a href= "#"><li class = "shake"> Blog </li></a>	
					<a href= "#"><li class = "shake"> Get to know me </li></a> */}
			</ul>	
              {/* <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="Home">Classic Euphemist</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href ="Home">Home</Nav.Link>
                    <Nav.Link href ="About">About</Nav.Link>
                    <Nav.Link href ="Photo">Gallery</Nav.Link>
                </Nav>
            </Navbar> */}
		</div>


          
      );
}

class HeaderComponent extends Component{
    css={
        backgroundImage: `url(${Image})`,
        backgroundSize: '100%',
        backgroundPosition:'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    
  
   
    render(){
        return(
            <div style={this.css}>
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        <Route path="/about" >
                            <About/>    
                        </Route>
                        <Route path="/Photo" >
                            <Photo/>
                        </Route>
                        <Route  path="/" >    
                            <Home/>
                        </Route>
                    </Switch>
                  
                </BrowserRouter>
              
            </div>
        );
    }
}

export default HeaderComponent;