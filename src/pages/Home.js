import React,{ Component} from 'react';
import {Container,Image} from 'react-bootstrap';
import HomePageCss from '../css/HomePage.module.css';
import Fade from 'react-reveal/Fade';

class Home extends Component{

    state ={
        triggerevent:false,
        Scroll:false,
    }

    margin_ = {
        margin:'5px',
    }
    
    componentDidMount= function() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount= function() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    handleScroll =()=>{
       if(this.state.triggerevent){
           console.log(window.pageYOffset)
            if (window.pageYOffset>'600'){
                this.setState({triggerevent:!this.state.triggerevent})
            }
       }
    }

   
    
    clickhandler(){
        this.setState({triggerevent:!this.state.triggerevent})
        console.log(this.state.triggerevent);
    }

    ScrollHandler=()=>{
       console.log("Scroll event");
    }

    
    

    render(){
        return(
             <Container >
                  <h1 className="text-center">Classic Euphemist</h1>
                    <div className={HomePageCss['main_container']} onscroll={this.ScrollHandler} >
                       
                        <Fade cascade when ={!this.state.triggerevent} timeout='1500'>
                            <hr className={HomePageCss['hr1']}/>
                        </Fade>    
                   
                        <Image className={HomePageCss['ppic']} onClick={()=>this.clickhandler()} src={require("../resources/meliodas.jpg")} roundedCircle />
                   

                        <Fade bottom when={this.state.triggerevent} timeout='1500' >

                            <div className={HomePageCss['ppic_click_open']} >
                                {/* There should be some content regarding two columns for resumes */}
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-12-xs col-12-s" style={{left:'25px'}}  >
                                       <div className="Red text-left" >
                                            <h2>EDUCATION</h2>
                                            <div style={{marginBottom:'50px'}}></div>
                                          
                                            <h5>High School</h5>
                                            <span>St Xavier's Jawalakhel</span>
                                            <div style={{marginBottom:'50px'}}></div>
                                            <h5>Diploma</h5>
                                            <span>Swinburne University Of Technology</span><br></br>                                          
                                            <span>Diploma of IT</span>
                                            <div style={{marginBottom:'50px'}}></div>
                                          
                                            <h5>Bachelor</h5>
                                            <span>Swinburne University Of Technology</span><br></br>
                                            <span>Bachelor of Computer Science(Software Dev)</span> <br></br>   
                                            <div style={{marginBottom:'50px'}}></div>
                                        </div>
                                    </div>

                                     <div className="col-lg-6 col-md-6 col-12-xs col-12-s" >
                                     
                                        <h2>A BIT ABOUT MYSELF</h2>

                                     
                                    </div>
                                </div>
                            </div>
                        </Fade>
            
                        
                    </div>

                    <div style={{paddingBottom:'100%'}}>
                        <div>Center the Linked In, Github</div>    
                    </div>
                    
                </Container>
            

        );
    }
}

export default Home;