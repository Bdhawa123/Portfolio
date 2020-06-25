import React,{ Component} from 'react';
//import HeaderComponent from './pages/header.js';
import About from './about';
import Photo from './photo';
import Home from './Home';
import {Navbar,Nav} from 'react-bootstrap';
import Image from "../resources/coffee_lover.jpg";
import { Route,BrowserRouter, Switch} from 'react-router-dom';
import navStyle from "../css/navigation.css";
import Navigation from './nav';


//import { url } from 'inspector';
console.log('this is the header');

class HeaderComponent extends Component{
    css={
        BackgroundIMG:{
            backgroundImage: `url(${Image})`,
            backgroundSize: '100%',
            backgroundPosition:'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',}
    }

    
  
   
    render(){
        return(
            <div style={this.css.BackgroundIMG}>
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